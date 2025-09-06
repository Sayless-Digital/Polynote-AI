import { db } from '@polynote/db';
import { userAISettings, tokenUsageLogs, UserAISettings, NewTokenUsageLog } from '@polynote/db';
import { eq, and, gte } from 'drizzle-orm';
import crypto from 'crypto';
import { AI_PROVIDERS } from './ai-providers';

// Type for decrypted user settings
export interface DecryptedUserAISettings extends Omit<UserAISettings, 'apiKey'> {
  apiKey: string;
}

// Encryption key for API keys (in production, use a proper key management system)
const ENCRYPTION_KEY = process.env.API_KEY_ENCRYPTION_KEY || 'default-encryption-key-change-in-production';
const ALGORITHM = 'aes-256-gcm';

// Derive key from password for AES-256-GCM
function getKey(): Buffer {
  return crypto.scryptSync(ENCRYPTION_KEY, 'salt', 32);
}

/**
 * Encrypt API key for storage
 */
function encryptApiKey(apiKey: string): string {
  const iv = crypto.randomBytes(16);
  const key = getKey();
  const cipher = crypto.createCipheriv(ALGORITHM, key, iv);

  let encrypted = cipher.update(apiKey, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  const authTag = cipher.getAuthTag();
  return iv.toString('hex') + ':' + encrypted + ':' + authTag.toString('hex');
}

/**
 * Decrypt API key for use (supports both old and new formats)
 */
function decryptApiKey(encryptedApiKey: string): string {
  const parts = encryptedApiKey.split(':');

  // Handle new format (3 parts: iv:encrypted:authTag)
  if (parts.length === 3) {
    const iv = Buffer.from(parts[0], 'hex');
    const encrypted = parts[1];
    const authTag = Buffer.from(parts[2], 'hex');
    const key = getKey();

    const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
    decipher.setAuthTag(authTag);

    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }

  // Handle old format (2 parts: iv:encrypted) for backward compatibility
  if (parts.length === 2) {
    const iv = Buffer.from(parts[0], 'hex');
    const encrypted = parts[1];
    const decipher = crypto.createDecipher(ALGORITHM, Buffer.from(ENCRYPTION_KEY));
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }

  throw new Error('Invalid encrypted API key format');
}

/**
 * Get user's AI settings
 */
export async function getUserAISettings(userId: string): Promise<DecryptedUserAISettings | null> {
  try {
    const [settings] = await db
      .select()
      .from(userAISettings)
      .where(eq(userAISettings.userId, userId))
      .limit(1);

    if (settings && settings.apiKey) {
      // Decrypt the API key
      settings.apiKey = decryptApiKey(settings.apiKey);
    }

    return settings || null;
  } catch (error) {
    console.error('Error getting user AI settings:', error);
    return null;
  }
}

/**
 * Create or update user's AI settings
 */
export async function upsertUserAISettings(
  userId: string,
  settings: {
    provider?: string;
    apiKey?: string;
    model?: string;
    enabledAnalyses?: string[];
    analysisTimeout?: number;
    cacheEnabled?: boolean;
    cacheTTL?: number;
  }
): Promise<DecryptedUserAISettings | null> {
  try {
    const existingSettings = await getUserAISettings(userId);
    
    const settingsData = {
      userId,
      provider: settings.provider || 'google',
      apiKey: settings.apiKey ? encryptApiKey(settings.apiKey) : existingSettings?.apiKey,
      model: settings.model || 'gemini-1.5-flash-latest',
      enabledAnalyses: settings.enabledAnalyses || ['title', 'summary', 'key_points', 'categories', 'tags'],
      analysisTimeout: settings.analysisTimeout || 30000,
      cacheEnabled: settings.cacheEnabled !== undefined ? settings.cacheEnabled : true,
      cacheTTL: settings.cacheTTL || 86400,
      updatedAt: new Date(),
    };

    if (existingSettings) {
      const [updated] = await db
        .update(userAISettings)
        .set(settingsData)
        .where(eq(userAISettings.userId, userId))
        .returning();
      
      if (updated && updated.apiKey) {
        updated.apiKey = decryptApiKey(updated.apiKey);
      }
      return updated;
    } else {
      const [created] = await db
        .insert(userAISettings)
        .values(settingsData)
        .returning();
      
      if (created && created.apiKey) {
        created.apiKey = decryptApiKey(created.apiKey);
      }
      return created;
    }
  } catch (error) {
    console.error('Error upserting user AI settings:', error);
    return null;
  }
}

/**
 * Log token usage
 */
export async function logTokenUsage(
  userId: string,
  usage: {
    noteId?: string;
    provider: string;
    model: string;
    analysisType: string;
    inputTokens: number;
    outputTokens: number;
    totalTokens: number;
    requestDuration?: number;
    success: boolean;
    errorMessage?: string;
    estimatedCost?: number;
  }
): Promise<void> {
  try {
    const logData: NewTokenUsageLog = {
      userId,
      noteId: usage.noteId,
      provider: usage.provider,
      model: usage.model,
      analysisType: usage.analysisType,
      inputTokens: usage.inputTokens,
      outputTokens: usage.outputTokens,
      totalTokens: usage.totalTokens,
      requestDuration: usage.requestDuration,
      success: usage.success,
      errorMessage: usage.errorMessage,
      estimatedCost: usage.estimatedCost,
    };

    await db.insert(tokenUsageLogs).values(logData);

    // Update user's total usage
    if (usage.success) {
      await db
        .update(userAISettings)
        .set({
          totalTokensUsed: db.sql`${userAISettings.totalTokensUsed} + ${usage.totalTokens}`,
          totalRequests: db.sql`${userAISettings.totalRequests} + 1`,
          lastUsedAt: new Date(),
        })
        .where(eq(userAISettings.userId, userId));
    }
  } catch (error) {
    console.error('Error logging token usage:', error);
  }
}

/**
 * Get user's token usage statistics
 */
export async function getUserTokenUsage(userId: string, days: number = 30) {
  try {
    const since = new Date();
    since.setDate(since.getDate() - days);

    const usage = await db
      .select()
      .from(tokenUsageLogs)
      .where(
        and(
          eq(tokenUsageLogs.userId, userId),
          gte(tokenUsageLogs.createdAt, since)
        )
      );

    const stats = {
      totalRequests: usage.length,
      totalTokens: usage.reduce((sum, log) => sum + log.totalTokens, 0),
      totalInputTokens: usage.reduce((sum, log) => sum + log.inputTokens, 0),
      totalOutputTokens: usage.reduce((sum, log) => sum + log.outputTokens, 0),
      successfulRequests: usage.filter(log => log.success).length,
      failedRequests: usage.filter(log => !log.success).length,
      averageRequestDuration: usage.length > 0 ? usage.reduce((sum, log) => sum + (log.requestDuration || 0), 0) / usage.length : 0,
      estimatedTotalCost: usage.reduce((sum, log) => sum + (log.estimatedCost || 0), 0) / 100, // Convert from cents to dollars
      byProvider: {} as Record<string, any>,
      byModel: {} as Record<string, any>,
      byAnalysisType: {} as Record<string, any>,
    };

    // Group by provider
    usage.forEach(log => {
      if (!stats.byProvider[log.provider]) {
        stats.byProvider[log.provider] = { requests: 0, tokens: 0, cost: 0 };
      }
      stats.byProvider[log.provider].requests++;
      stats.byProvider[log.provider].tokens += log.totalTokens;
      stats.byProvider[log.provider].cost += (log.estimatedCost || 0) / 100; // Convert from cents to dollars
    });

    // Group by model
    usage.forEach(log => {
      if (!stats.byModel[log.model]) {
        stats.byModel[log.model] = { requests: 0, tokens: 0, cost: 0 };
      }
      stats.byModel[log.model].requests++;
      stats.byModel[log.model].tokens += log.totalTokens;
      stats.byModel[log.model].cost += (log.estimatedCost || 0) / 100; // Convert from cents to dollars
    });

    // Group by analysis type
    usage.forEach(log => {
      if (!stats.byAnalysisType[log.analysisType]) {
        stats.byAnalysisType[log.analysisType] = { requests: 0, tokens: 0, cost: 0 };
      }
      stats.byAnalysisType[log.analysisType].requests++;
      stats.byAnalysisType[log.analysisType].tokens += log.totalTokens;
      stats.byAnalysisType[log.analysisType].cost += (log.estimatedCost || 0) / 100; // Convert from cents to dollars
    });

    return stats;
  } catch (error) {
    console.error('Error getting user token usage:', error);
    return null;
  }
}


/**
 * Estimate cost for token usage
 */
export function estimateCost(provider: string, model: string, tokens: number): number {
  const providerInfo = AI_PROVIDERS[provider as keyof typeof AI_PROVIDERS];
  if (!providerInfo) return 0;

  const modelInfo = providerInfo.models.find(m => m.id === model);
  if (!modelInfo) return 0;

  // Return cost in cents for storage
  return Math.round((tokens / 1000) * modelInfo.costPer1kTokens * 100);
}


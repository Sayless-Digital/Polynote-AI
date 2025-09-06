import { google } from '@ai-sdk/google';
import { AnalysisResult, AnalysisType } from '../types';
import { getUserAISettings, logTokenUsage, DecryptedUserAISettings } from '@/lib/ai-config';

export abstract class BaseAnalysisService {
  protected model: any;
  protected userSettings: DecryptedUserAISettings | null = null;

  abstract readonly type: AnalysisType;

  async initialize(userId: string) {
    console.log(`[${this.type.toUpperCase()}] Initializing service for user:`, userId);
    
    // Only try to get user settings if userId is not 'default'
    if (userId !== 'default') {
      this.userSettings = await getUserAISettings(userId);
      console.log(`[${this.type.toUpperCase()}] User settings:`, {
        hasSettings: !!this.userSettings,
        provider: this.userSettings?.provider,
        model: this.userSettings?.model,
        hasApiKey: !!this.userSettings?.apiKey
      });
    }
    
    if (this.userSettings?.provider === 'google' && this.userSettings?.apiKey) {
      console.log(`[${this.type.toUpperCase()}] Using user's Google API key with model:`, this.userSettings.model);
      this.model = google(this.userSettings.model, {
        apiKey: this.userSettings.apiKey,
      });
    } else {
      // Fallback to environment variable
      console.log(`[${this.type.toUpperCase()}] Using environment variable for Google API key`);
      console.log(`[${this.type.toUpperCase()}] Environment API key present:`, !!process.env.GOOGLE_GENERATIVE_AI_API_KEY);
      this.model = google('models/gemini-1.5-flash-latest', {
        apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
      });
    }
  }
  abstract readonly priority: number;
  abstract readonly timeout: number;

  /**
   * Perform the analysis
   */
  abstract analyze(content: string, context?: Record<string, unknown>, userId?: string): Promise<AnalysisResult>;

  /**
   * Validate the content before analysis
   */
  protected validateContent(content: string): boolean {
    if (!content || content.trim().length < 10) {
      return false;
    }
    return true;
  }

  /**
   * Create a base analysis result
   */
  protected createBaseResult(
    noteId: string,
    status: AnalysisResult['status'],
    result?: Record<string, unknown>,
    error?: string,
    processingTime?: number
  ): AnalysisResult {
    return {
      id: `${noteId}_${this.type}_${Date.now()}`,
      noteId,
      type: this.type,
      status,
      result,
      error,
      createdAt: new Date(),
      updatedAt: new Date(),
      processingTime,
    };
  }

  /**
   * Execute analysis with timeout and error handling
   */
  protected async executeWithTimeout<T>(
    operation: () => Promise<T>,
    timeoutMs: number = this.timeout
  ): Promise<T> {
    return Promise.race([
      operation(),
      new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error(`Analysis timeout after ${timeoutMs}ms`)), timeoutMs)
      ),
    ]);
  }

  /**
   * Execute analysis with retry logic and quota detection
   */
  protected async executeWithRetry<T>(
    operation: () => Promise<T>,
    maxRetries: number = 1
  ): Promise<T> {
    let lastError: Error | null = null;
    
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        return await operation();
      } catch (error) {
        lastError = error instanceof Error ? error : new Error('Unknown error');
        
        // Check if it's a quota exceeded error - don't retry
        const isQuotaExceeded = lastError.message.includes('quota') || 
          lastError.message.includes('RESOURCE_EXHAUSTED') ||
          lastError.message.includes('429') ||
          lastError.message.includes('exceeded');
        
        if (isQuotaExceeded) {
          console.log(`[${this.type.toUpperCase()}] Quota exceeded detected, not retrying`);
          throw lastError;
        }
        
        // If this is the last attempt, throw the error
        if (attempt === maxRetries) {
          throw lastError;
        }
        
        console.log(`[${this.type.toUpperCase()}] Attempt ${attempt + 1} failed, retrying...`);
        // Small delay before retry
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    
    throw lastError || new Error('Max retries exceeded');
  }

  /**
   * Log analysis metrics
   */
  protected async logMetrics(
    noteId: string,
    processingTime: number,
    success: boolean,
    error?: string,
    userId?: string,
    inputTokens?: number,
    outputTokens?: number
  ): Promise<void> {
    console.log(`[${this.type.toUpperCase()}] Analysis completed:`, {
      noteId,
      processingTime: `${processingTime}ms`,
      success,
      error,
      inputTokens,
      outputTokens,
      timestamp: new Date().toISOString(),
    });

    // Log token usage if we have user settings and userId
    if (this.userSettings && userId) {
      // Use actual token data if available, otherwise estimate
      const actualInputTokens = inputTokens !== undefined ? inputTokens : 0;
      const actualOutputTokens = outputTokens !== undefined ? outputTokens : 0;
      
      await logTokenUsage(userId, {
        noteId,
        provider: this.userSettings.provider,
        model: this.userSettings.model,
        analysisType: this.type,
        inputTokens: actualInputTokens,
        outputTokens: actualOutputTokens,
        totalTokens: actualInputTokens + actualOutputTokens,
        requestDuration: processingTime,
        success,
        errorMessage: error,
      });
    }
  }

  /**
   * Estimate input tokens (rough approximation)
   */
  protected estimateInputTokens(text: string): number {
    return Math.ceil(text.length / 4); // Rough estimate: 4 characters per token
  }

  /**
   * Estimate output tokens (rough approximation)
   */
  protected estimateOutputTokens(result: Record<string, unknown>): number {
    const resultText = JSON.stringify(result);
    return Math.ceil(resultText.length / 4);
  }

  /**
   * Get analysis priority (lower number = higher priority)
   */
  getPriority(): number {
    return this.priority;
  }

  /**
   * Check if this analysis type is enabled
   */
  isEnabled(enabledTypes: AnalysisType[]): boolean {
    return enabledTypes.includes(this.type);
  }
}

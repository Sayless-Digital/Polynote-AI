import { google } from '@ai-sdk/google';
import { AnalysisResult, AnalysisType } from '../types';
import { getUserAISettings, logTokenUsage, DecryptedUserAISettings } from '@/lib/ai-config';

export abstract class BaseAnalysisService {
  protected model: any;
  protected userSettings: DecryptedUserAISettings | null = null;

  abstract readonly type: AnalysisType;

  async initialize(userId: string) {
    this.userSettings = await getUserAISettings(userId);
    
    if (this.userSettings?.provider === 'google' && this.userSettings?.apiKey) {
      this.model = google(this.userSettings.model, {
        apiKey: this.userSettings.apiKey,
      });
    } else {
      // Fallback to environment variable
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
      timestamp: new Date().toISOString(),
    });

    // Log token usage if we have user settings and userId
    if (this.userSettings && userId && inputTokens !== undefined && outputTokens !== undefined) {
      await logTokenUsage(userId, {
        noteId,
        provider: this.userSettings.provider,
        model: this.userSettings.model,
        analysisType: this.type,
        inputTokens,
        outputTokens,
        totalTokens: inputTokens + outputTokens,
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

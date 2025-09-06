import { BaseAnalysisService } from './BaseAnalysisService';
import { AnalysisResult, AnalysisType, SummaryAnalysisSchema } from '../types';
import { generateObject } from 'ai';

export class SummaryAnalysisService extends BaseAnalysisService {
  readonly type = AnalysisType.SUMMARY;
  readonly priority = 1; // High priority
  readonly timeout = 5000; // 5 seconds - fail faster

  async analyze(content: string, context?: any): Promise<AnalysisResult> {
    const startTime = Date.now();
    
    if (!this.validateContent(content)) {
      const result = this.createBaseResult(
        context?.noteId || 'unknown',
        'failed',
        null,
        'Content too short for analysis'
      );
      this.logMetrics(context?.noteId || 'unknown', Date.now() - startTime, false, 'Content too short');
      return result;
    }

    try {
      let analysisResult: any;
      let inputTokens = 0;
      let outputTokens = 0;

      const analysisData = await this.executeWithRetry(async () => {
        return await this.executeWithTimeout(async () => {
          const prompt = this.buildPrompt(content);
          
          const analysis = await generateObject({
            model: this.model,
            schema: SummaryAnalysisSchema,
            prompt,
          });

          // Extract token usage data
          if (analysis.usage) {
            inputTokens = analysis.usage.promptTokens || 0;
            outputTokens = analysis.usage.completionTokens || 0;
          }

          analysisResult = analysis.object;
          return analysisResult;
        });
      }, 1); // Only 1 retry attempt

      const processingTime = Date.now() - startTime;
      const result = this.createBaseResult(
        context?.noteId || 'unknown',
        'completed',
        analysisData,
        undefined,
        processingTime
      );

      this.logMetrics(context?.noteId || 'unknown', processingTime, true, undefined, context?.userId, inputTokens, outputTokens);
      return result;

    } catch (error) {
      const processingTime = Date.now() - startTime;
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      
      // Check if it's a quota exceeded error
      const isQuotaExceeded = error instanceof Error && 
        (error.message.includes('quota') || 
         error.message.includes('RESOURCE_EXHAUSTED') ||
         error.message.includes('429') ||
         error.message.includes('exceeded'));
      
      const result = this.createBaseResult(
        context?.noteId || 'unknown',
        'failed',
        null,
        isQuotaExceeded ? 'API quota exceeded' : errorMessage,
        processingTime
      );

      this.logMetrics(context?.noteId || 'unknown', processingTime, false, errorMessage);
      return result;
    }
  }

  private buildPrompt(content: string): string {
    return `You are an expert content analyst specializing in creating high-quality summaries.

Content to analyze:
"${content}"

Please create a comprehensive summary that:
1. Captures the main ideas and key concepts
2. Maintains the original meaning and context
3. Is concise but complete (10-1000 words)
4. Identifies the primary themes
5. Uses clear, professional language

Focus on extracting the essence of the content while preserving important details. The summary should be useful for someone who wants to quickly understand the main points without reading the full content.

Consider the content's:
- Main topic and purpose
- Key arguments or points
- Important details or examples
- Overall tone and perspective
- Target audience implications

Provide a confidence score (0-1) indicating how well you understood the content, and identify the primary language used.`;
  }
}


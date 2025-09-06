import { BaseAnalysisService } from './BaseAnalysisService';
import { AnalysisResult, AnalysisType, SummaryAnalysisSchema } from '../types';

export class SummaryAnalysisService extends BaseAnalysisService {
  readonly type = AnalysisType.SUMMARY;
  readonly priority = 1; // High priority
  readonly timeout = 10000; // 10 seconds

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
      const result = await this.executeWithTimeout(async () => {
        const prompt = this.buildPrompt(content);
        
        const analysis = await generateObject({
          model: this.model,
          schema: SummaryAnalysisSchema,
          prompt,
        });

        return analysis.object;
      });

      const processingTime = Date.now() - startTime;
      const analysisResult = this.createBaseResult(
        context?.noteId || 'unknown',
        'completed',
        result,
        undefined,
        processingTime
      );

      this.logMetrics(context?.noteId || 'unknown', processingTime, true);
      return analysisResult;

    } catch (error) {
      const processingTime = Date.now() - startTime;
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      
      const result = this.createBaseResult(
        context?.noteId || 'unknown',
        'failed',
        null,
        errorMessage,
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


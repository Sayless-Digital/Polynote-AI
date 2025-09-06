import { BaseAnalysisService } from './BaseAnalysisService';
import { AnalysisResult, AnalysisType, TitleAnalysisSchema } from '../types';
import { generateObject } from 'ai';

export class TitleAnalysisService extends BaseAnalysisService {
  readonly type = AnalysisType.TITLE;
  readonly priority = 1; // High priority (same as summary)
  readonly timeout = 3000; // 3 seconds - fail faster

  async analyze(content: string, context?: any): Promise<AnalysisResult> {
    const startTime = Date.now();
    
    if (!this.validateContent(content)) {
      const result = this.createBaseResult(
        context?.noteId || 'unknown',
        'failed',
        null,
        'Content too short for title generation'
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
            schema: TitleAnalysisSchema,
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
    return `You are an expert content titler specializing in creating compelling, descriptive titles.

Content to analyze:
"${content}"

Please generate an effective title for this content. Provide:

1. **Title**: A clear, engaging title (5-100 characters)
2. **Alternatives**: 1-3 alternative title options
3. **Confidence**: How confident you are in this title (0-1)
4. **Style**: The title style (descriptive, question, statement, creative)

Title Guidelines:
- **Descriptive**: Clearly describes what the content is about
- **Question**: Poses a question that the content answers
- **Statement**: Makes a declarative statement about the content
- **Creative**: Uses creative language or wordplay

Consider these factors:
- **Clarity**: The title should clearly indicate the content's main topic
- **Engagement**: Make it interesting and compelling to read
- **Accuracy**: Ensure it accurately represents the content
- **Length**: Keep it concise but informative
- **Keywords**: Include important terms for searchability
- **Tone**: Match the tone and style of the content
- **Uniqueness**: Make it distinctive and memorable

Avoid:
- Generic titles like "Notes" or "Content"
- Overly long or complex titles
- Misleading or inaccurate descriptions
- Titles that don't reflect the main content

The title should help users quickly understand what the content is about and encourage them to read it.`;
  }
}


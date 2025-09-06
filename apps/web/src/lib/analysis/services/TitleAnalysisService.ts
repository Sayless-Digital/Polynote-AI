import { BaseAnalysisService } from './BaseAnalysisService';
import { AnalysisResult, AnalysisType, TitleAnalysisSchema } from '../types';

export class TitleAnalysisService extends BaseAnalysisService {
  readonly type = AnalysisType.TITLE;
  readonly priority = 1; // High priority (same as summary)
  readonly timeout = 5000; // 5 seconds

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
      const result = await this.executeWithTimeout(async () => {
        const prompt = this.buildPrompt(content);
        
        const analysis = await generateObject({
          model: this.model,
          schema: TitleAnalysisSchema,
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


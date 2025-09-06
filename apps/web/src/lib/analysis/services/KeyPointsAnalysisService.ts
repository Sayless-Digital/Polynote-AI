import { BaseAnalysisService } from './BaseAnalysisService';
import { AnalysisResult, AnalysisType, KeyPointsAnalysisSchema } from '../types';

export class KeyPointsAnalysisService extends BaseAnalysisService {
  readonly type = AnalysisType.KEY_POINTS;
  readonly priority = 2; // High priority
  readonly timeout = 12000; // 12 seconds

  async analyze(content: string, context?: any): Promise<AnalysisResult> {
    const startTime = Date.now();
    
    if (!this.validateContent(content)) {
      const result = this.createBaseResult(
        context?.noteId || 'unknown',
        'failed',
        null,
        'Content too short for key points extraction'
      );
      this.logMetrics(context?.noteId || 'unknown', Date.now() - startTime, false, 'Content too short');
      return result;
    }

    try {
      const result = await this.executeWithTimeout(async () => {
        const prompt = this.buildPrompt(content);
        
        const analysis = await generateObject({
          model: this.model,
          schema: KeyPointsAnalysisSchema,
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
    return `You are an expert content analyst specializing in extracting key points and insights.

Content to analyze:
"${content}"

Please extract the most important key points from this content. For each key point:

1. **Point**: A clear, concise statement of the main idea (10-200 characters)
2. **Importance**: A score from 0-1 indicating how critical this point is to understanding the content
3. **Category**: Optional categorization (e.g., "main argument", "supporting evidence", "conclusion", "action item")
4. **Evidence**: Optional supporting evidence or context from the content

Guidelines:
- Extract 1-10 key points (prioritize quality over quantity)
- Focus on the most significant ideas, arguments, or insights
- Avoid redundancy - each point should be distinct
- Consider both explicit and implicit key ideas
- Rank points by importance to the overall content
- Include actionable items if present
- Capture both facts and opinions/interpretations

The key points should help someone quickly understand the most important aspects of the content without reading it in full.`;
  }
}


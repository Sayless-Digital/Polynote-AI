import { BaseAnalysisService } from './BaseAnalysisService';
import { AnalysisResult, AnalysisType, CategoriesAnalysisSchema } from '../types';
import { generateObject } from 'ai';

export class CategoriesAnalysisService extends BaseAnalysisService {
  readonly type = AnalysisType.CATEGORIES;
  readonly priority = 3; // Medium priority
  readonly timeout = 8000; // 8 seconds

  async analyze(content: string, context?: any): Promise<AnalysisResult> {
    const startTime = Date.now();
    
    if (!this.validateContent(content)) {
      const result = this.createBaseResult(
        context?.noteId || 'unknown',
        'failed',
        null,
        'Content too short for categorization'
      );
      this.logMetrics(context?.noteId || 'unknown', Date.now() - startTime, false, 'Content too short');
      return result;
    }

    try {
      let analysisResult: any;
      let inputTokens = 0;
      let outputTokens = 0;

      const analysisData = await this.executeWithTimeout(async () => {
        const prompt = this.buildPrompt(content);
        
        const analysis = await generateObject({
          model: this.model,
          schema: CategoriesAnalysisSchema,
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
    return `You are an expert content classifier specializing in intelligent categorization.

Content to analyze:
"${content}"

Please categorize this content using a hierarchical classification system. For each category:

1. **Name**: A clear, descriptive category name (2-50 characters)
2. **Confidence**: A score from 0-1 indicating how confident you are in this categorization
3. **Reasoning**: Brief explanation of why this category applies
4. **Subcategories**: Optional more specific subcategories

Consider these category types:
- **Subject Matter**: What is the content about? (e.g., Technology, Business, Health, Education)
- **Content Type**: What form is it? (e.g., Tutorial, Analysis, Opinion, News, Research)
- **Purpose**: What is the intent? (e.g., Informational, Persuasive, Instructional, Creative)
- **Domain**: What field or industry? (e.g., Software Development, Marketing, Medicine, Law)
- **Audience**: Who is it for? (e.g., Beginners, Professionals, General Public, Students)
- **Tone**: What is the style? (e.g., Formal, Casual, Technical, Academic)

Guidelines:
- Provide 1-5 categories (prioritize the most relevant)
- Use standard, recognizable category names
- Consider both primary and secondary categorizations
- Include confidence scores for each category
- Provide clear reasoning for your choices
- Consider the content's context and implications
- Use consistent naming conventions

The primary category should be the most important classification for organizing and finding this content.`;
  }
}


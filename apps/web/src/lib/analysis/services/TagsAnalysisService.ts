import { BaseAnalysisService } from './BaseAnalysisService';
import { AnalysisResult, AnalysisType, TagsAnalysisSchema } from '../types';
import { generateObject } from 'ai';

export class TagsAnalysisService extends BaseAnalysisService {
  readonly type = AnalysisType.TAGS;
  readonly priority = 4; // Medium priority
  readonly timeout = 6000; // 6 seconds

  async analyze(content: string, context?: any): Promise<AnalysisResult> {
    const startTime = Date.now();
    
    if (!this.validateContent(content)) {
      const result = this.createBaseResult(
        context?.noteId || 'unknown',
        'failed',
        null,
        'Content too short for tag extraction'
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
          schema: TagsAnalysisSchema,
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
    return `You are an expert content tagger specializing in creating comprehensive, searchable tags.

Content to analyze:
"${content}"

Please extract relevant tags that would help users find and organize this content. For each tag:

1. **Tag**: A concise, searchable term (2-30 characters)
2. **Relevance**: A score from 0-1 indicating how relevant this tag is to the content
3. **Type**: The type of tag (topic, entity, concept, action, emotion)
4. **Frequency**: Optional count of how often this concept appears in the content

Tag Types:
- **Topic**: Main subjects or themes (e.g., "machine-learning", "project-management")
- **Entity**: Specific people, places, organizations, products (e.g., "google", "javascript", "tesla")
- **Concept**: Abstract ideas or principles (e.g., "agile", "sustainability", "innovation")
- **Action**: Verbs or activities (e.g., "planning", "analysis", "implementation")
- **Emotion**: Emotional tone or sentiment (e.g., "optimistic", "concerned", "excited")

Guidelines:
- Extract 1-15 tags (prioritize the most relevant and useful)
- Use lowercase, hyphenated format for multi-word tags
- Avoid overly generic tags (like "information" or "content")
- Include both broad and specific tags
- Consider synonyms and related terms
- Focus on tags that would be useful for search and discovery
- Include technical terms, proper nouns, and key concepts
- Consider the content's context and domain

The tags should make this content easily discoverable and help users understand what it's about at a glance.`;
  }
}


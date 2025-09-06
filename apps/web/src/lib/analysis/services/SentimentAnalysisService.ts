import { BaseAnalysisService } from './BaseAnalysisService';
import { AnalysisResult, AnalysisType, SentimentAnalysisSchema } from '../types';

export class SentimentAnalysisService extends BaseAnalysisService {
  readonly type = AnalysisType.SENTIMENT;
  readonly priority = 5; // Lower priority
  readonly timeout = 5000; // 5 seconds

  async analyze(content: string, context?: any): Promise<AnalysisResult> {
    const startTime = Date.now();
    
    if (!this.validateContent(content)) {
      const result = this.createBaseResult(
        context?.noteId || 'unknown',
        'failed',
        null,
        'Content too short for sentiment analysis'
      );
      this.logMetrics(context?.noteId || 'unknown', Date.now() - startTime, false, 'Content too short');
      return result;
    }

    try {
      const result = await this.executeWithTimeout(async () => {
        const prompt = this.buildPrompt(content);
        
        const analysis = await generateObject({
          model: this.model,
          schema: SentimentAnalysisSchema,
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
    return `You are an expert sentiment analyst specializing in understanding emotional tone and attitude.

Content to analyze:
"${content}"

Please analyze the sentiment and emotional tone of this content. Provide:

1. **Overall Sentiment**: The primary emotional tone (positive, negative, neutral, mixed)
2. **Confidence**: How confident you are in this assessment (0-1)
3. **Emotions**: Specific emotions detected with their intensity (0-1)
4. **Polarity**: Overall emotional polarity (-1 to 1, where -1 is very negative, 0 is neutral, 1 is very positive)

Consider these aspects:
- **Tone**: Is the content optimistic, pessimistic, neutral, or mixed?
- **Emotional Language**: What emotions are expressed or implied?
- **Attitude**: How does the author feel about the subject matter?
- **Context**: Consider the purpose and context of the content
- **Nuance**: Look for subtle emotional cues and mixed sentiments

Emotions to consider:
- Joy, excitement, satisfaction, optimism
- Sadness, disappointment, frustration, concern
- Anger, irritation, criticism, hostility
- Fear, anxiety, worry, uncertainty
- Surprise, curiosity, interest, amazement
- Trust, confidence, certainty, assurance
- Disgust, contempt, rejection, disapproval

Guidelines:
- Consider both explicit and implicit emotional content
- Look for emotional indicators in word choice, tone, and context
- Account for sarcasm, irony, and other nuanced expressions
- Consider the overall message and its emotional impact
- Provide confidence scores based on clarity of emotional signals
- Identify mixed sentiments when multiple emotions are present

The analysis should help understand the emotional context and tone of the content for better interpretation and response.`;
  }
}


import { google } from '@ai-sdk/google';
import { generateText, generateObject } from 'ai';
import { z } from 'zod';

// Initialize Gemini Flash model with explicit API key
export const geminiFlash = google('models/gemini-1.5-flash-latest', {
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

// Schema for note analysis
const NoteAnalysisSchema = z.object({
  title: z.string(),
  summary: z.string(),
  tags: z.array(z.string()),
  categories: z.array(z.string()),
  sentiment: z.string(),
  keyPoints: z.array(z.string()),
});

// Schema for search queries
const SearchQuerySchema = z.object({
  intent: z.string(),
  keywords: z.array(z.string()),
  filters: z.object({
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    dateRange: z.string().optional(),
  }),
});

/**
 * Analyze a note transcript and extract metadata
 */
export async function analyzeNote(transcript: string) {
  const prompt = `You are an AI assistant that analyzes notes and extracts structured information.

Note content: "${transcript}"

Please analyze this content and provide:
1. A concise, descriptive title (not just the first few words)
2. A brief summary that captures the main ideas
3. 3-5 relevant tags/keywords
4. Appropriate categories
5. The overall sentiment
6. Key points mentioned

Make sure to actually analyze and summarize the content, not just repeat it.`;

  try {
    console.log('Calling AI analysis with prompt:', prompt.substring(0, 200) + '...');
    const result = await generateObject({
      model: geminiFlash,
      schema: NoteAnalysisSchema,
      prompt,
    });

    console.log('AI analysis successful:', result.object);
    return result.object;
  } catch (error) {
    console.error('AI analysis failed, using fallback:', error);
    
    // Check if it's a quota exceeded error
    const isQuotaExceeded = error instanceof Error && 
      (error.message.includes('quota') || 
       error.message.includes('RESOURCE_EXHAUSTED') ||
       error.message.includes('429'));
    
    if (isQuotaExceeded) {
      console.warn('AI API quota exceeded, using enhanced fallback analysis');
    }
    
    // Enhanced fallback analysis
    const words = transcript.split(' ').filter(word => word.length > 0);
    const firstSentence = transcript.split(/[.!?]/)[0] || transcript;
    
    return {
      title: words.slice(0, 6).join(' ') + (words.length > 6 ? '...' : ''),
      summary: firstSentence.length > 150 ? firstSentence.substring(0, 150) + '...' : firstSentence,
      tags: ['note', 'analysis'],
      categories: ['general'],
      sentiment: 'neutral',
      keyPoints: words.length > 10 ? [words.slice(0, 10).join(' '), words.slice(10, 20).join(' ')].filter(Boolean) : [transcript],
    };
  }
}

/**
 * Generate search suggestions based on user query
 */
export async function generateSearchQuery(query: string) {
  const prompt = `
Analyze this search query and provide structured search parameters:

Query: "${query}"

Please identify:
- The user's intent
- Key search keywords
- Any category or tag filters mentioned
- Date range preferences if any

Make the search parameters specific and helpful.
`;

  try {
    const result = await generateObject({
      model: geminiFlash,
      schema: SearchQuerySchema,
      prompt,
    });

    return result.object;
  } catch (error) {
    console.error('Error generating search query:', error);
    return {
      intent: 'general_search',
      keywords: query.split(' '),
      filters: {},
    };
  }
}

/**
 * Generate a response to user questions about their notes
 */
export async function generateNoteResponse(question: string, context: string) {
  const prompt = `
Based on the following note content, answer the user's question:

Note Content: "${context}"

User Question: "${question}"

Provide a helpful, concise answer based on the note content.
`;

  try {
    const result = await generateText({
      model: geminiFlash,
      prompt,
    });

    return result.text;
  } catch (error) {
    console.error('Error generating response:', error);
    return 'I apologize, but I encountered an error processing your question.';
  }
}

/**
 * Test AI connection and API key
 */
export async function testAIConnection(): Promise<boolean> {
  try {
    console.log('Testing AI connection with model:', geminiFlash);
    console.log('API Key present:', !!process.env.GOOGLE_GENERATIVE_AI_API_KEY);
    console.log('API Key length:', process.env.GOOGLE_GENERATIVE_AI_API_KEY?.length);
    
    const result = await generateText({
      model: geminiFlash,
      prompt: 'Say "Hello" if you can read this message.',
    });

    console.log('AI test result:', result.text);
    return result.text.includes('Hello') || result.text.length > 0;
  } catch (error) {
    console.error('AI connection test failed:', error);
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
    });
    return false;
  }
}

/**
 * Transcribe audio to text (placeholder for voice transcription)
 */
export async function transcribeAudio(): Promise<string> {
  // This is a placeholder - in a real implementation, you'd use:
  // - Web Speech API for browser-based transcription
  // - Google Speech-to-Text API
  // - OpenAI Whisper API
  // For now, return a mock transcript
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("This is a mock transcript from the audio. In a real implementation, this would be the actual transcribed text from the user's voice recording.");
    }, 1000);
  });
}

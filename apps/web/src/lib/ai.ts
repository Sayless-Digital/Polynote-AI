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
  const prompt = `
Analyze this note transcript and provide structured information:

Transcript: "${transcript}"

Please provide:
- A concise title for the note
- A brief summary
- Relevant tags (3-5 keywords)
- Categories this note belongs to
- Overall sentiment
- Key points mentioned

Be specific and relevant to the content.
`;

  try {
    const result = await generateObject({
      model: geminiFlash,
      schema: NoteAnalysisSchema,
      prompt,
    });

    return result.object;
  } catch (error) {
    console.error('Error analyzing note:', error);
    // Fallback analysis
    return {
      title: transcript.split(' ').slice(0, 5).join(' ') + '...',
      summary: transcript.length > 100 ? transcript.substring(0, 100) + '...' : transcript,
      tags: ['note'],
      categories: ['general'],
      sentiment: 'neutral',
      keyPoints: [transcript],
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
    const result = await generateText({
      model: geminiFlash,
      prompt: 'Say "Hello" if you can read this message.',
    });

    return result.text.includes('Hello') || result.text.length > 0;
  } catch (error) {
    console.error('AI connection test failed:', error);
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

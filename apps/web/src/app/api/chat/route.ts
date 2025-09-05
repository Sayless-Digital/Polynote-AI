import { google } from '@ai-sdk/google';
import { streamText } from 'ai';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const result = await streamText({
    model: google('models/gemini-1.5-flash-latest', {
      apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
    }),
    messages,
    system: `You are an AI assistant specialized in helping users with their note-taking and organization. 
    
    Your capabilities include:
    - Analyzing and summarizing notes
    - Extracting key insights and themes
    - Organizing information into categories
    - Suggesting tags and labels
    - Answering questions about note content
    - Helping with research and fact-checking
    
    Always be helpful, concise, and focused on note-taking productivity. When users ask about their notes, 
    provide actionable insights and suggestions for better organization.`,
  });

  return result.toDataStreamResponse();
}

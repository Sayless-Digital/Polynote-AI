import { NextRequest, NextResponse } from 'next/server';
import { analyzeNote } from '@/lib/ai';
import { getCurrentUser } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    // Get the current user (optional for analysis)
    const user = await getCurrentUser();
    
    const body = await request.json();
    const { content, title, noteId } = body;

    if (!content?.trim()) {
      return NextResponse.json(
        { error: 'Content is required' },
        { status: 400 }
      );
    }

    console.log('AI Analysis - Content received:', {
      noteId: noteId || 'legacy',
      contentLength: content.length,
      contentPreview: content.substring(0, 200) + (content.length > 200 ? '...' : ''),
    });

    // Simple, direct AI analysis with timeout
    console.log('AI Analysis - Using simple analysis system');
    
    try {
      // Add timeout to prevent hanging
      const analysisPromise = analyzeNote(content);
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('AI analysis timeout after 10 seconds')), 10000)
      );
      
      const analysis = await Promise.race([analysisPromise, timeoutPromise]);

      console.log('AI Analysis - Result:', {
        title: analysis.title,
        tags: analysis.tags,
        categories: analysis.categories,
        summaryLength: analysis.summary?.length || 0
      });

      return NextResponse.json(analysis);
    } catch (error) {
      console.error('AI Analysis - Failed:', error);
      
      // Check if it's a quota exceeded error
      const isQuotaExceeded = error instanceof Error && 
        (error.message.includes('quota') || 
         error.message.includes('RESOURCE_EXHAUSTED') ||
         error.message.includes('429') ||
         error.message.includes('exceeded'));
      
      if (isQuotaExceeded) {
        console.warn('AI Analysis - Quota exceeded, providing fallback');
        return NextResponse.json(
          { 
            error: 'API quota exceeded. Please check your API key limits or try again later.',
            quotaExceeded: true,
            fallback: {
              title: title || 'Untitled Note',
              summary: content.length > 150 ? content.substring(0, 150) + '...' : content,
              tags: ['note'],
              categories: ['general'],
              sentiment: 'neutral',
              keyPoints: [content.substring(0, 100) + '...']
            }
          },
          { status: 429 }
        );
      }
      
      // For any other error, provide basic fallback
      console.warn('AI Analysis - Using basic fallback due to error');
      return NextResponse.json({
        title: title || 'Untitled Note',
        summary: content.length > 150 ? content.substring(0, 150) + '...' : content,
        tags: ['note'],
        categories: ['general'],
        sentiment: 'neutral',
        keyPoints: [content.substring(0, 100) + '...']
      });
    }

  } catch (error) {
    console.error('Error analyzing note:', error);
    return NextResponse.json(
      { error: 'Failed to analyze note' },
      { status: 500 }
    );
  }
}

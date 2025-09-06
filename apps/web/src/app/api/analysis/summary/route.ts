import { NextRequest, NextResponse } from 'next/server';
import { SummaryAnalysisService } from '@/lib/analysis/services/SummaryAnalysisService';
import { getCurrentUser } from '@/lib/auth';

const summaryService = new SummaryAnalysisService();

export async function POST(request: NextRequest) {
  try {
    // Get the current user (optional for analysis)
    const user = await getCurrentUser();
    
    const body = await request.json();
    const { content, noteId } = body;

    if (!content?.trim()) {
      return NextResponse.json(
        { error: 'Content is required' },
        { status: 400 }
      );
    }

    console.log('Summary Analysis Request:', {
      noteId: noteId || 'unknown',
      contentLength: content.length,
      userId: user?.id || 'anonymous',
    });

    // Initialize service with user settings if available
    if (user?.id) {
      await summaryService.initialize(user.id);
    } else {
      await summaryService.initialize('default');
    }

    const result = await summaryService.analyze(content, { 
      noteId: noteId || 'unknown',
      userId: user?.id 
    });

    if (result.status === 'completed' && result.result) {
      console.log('Summary Analysis Completed:', {
        noteId: result.noteId,
        processingTime: result.processingTime,
        summaryLength: result.result.summary?.length || 0,
        confidence: result.result.confidence,
      });

      return NextResponse.json({
        success: true,
        summary: result.result.summary,
        confidence: result.result.confidence,
        metadata: {
          processingTime: result.processingTime,
          analysisType: 'summary',
        },
      });
    } else {
      console.error('Summary Analysis Failed:', result.error);
      return NextResponse.json(
        { 
          success: false, 
          error: result.error || 'Summary analysis failed' 
        },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Summary Analysis Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}
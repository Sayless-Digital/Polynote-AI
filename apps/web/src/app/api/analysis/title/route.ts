import { NextRequest, NextResponse } from 'next/server';
import { TitleAnalysisService } from '@/lib/analysis/services/TitleAnalysisService';
import { getCurrentUser } from '@/lib/auth';

const titleService = new TitleAnalysisService();

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

    console.log('Title Analysis Request:', {
      noteId: noteId || 'unknown',
      contentLength: content.length,
      userId: user?.id || 'anonymous',
    });

    // Initialize service with user settings if available
    if (user?.id) {
      await titleService.initialize(user.id);
    } else {
      await titleService.initialize('default');
    }

    const result = await titleService.analyze(content, { 
      noteId: noteId || 'unknown',
      userId: user?.id 
    });

    if (result.status === 'completed' && result.result) {
      console.log('Title Analysis Completed:', {
        noteId: result.noteId,
        processingTime: result.processingTime,
        title: result.result.title,
        confidence: result.result.confidence,
      });

      return NextResponse.json({
        success: true,
        title: result.result.title,
        confidence: result.result.confidence,
        metadata: {
          processingTime: result.processingTime,
          analysisType: 'title',
        },
      });
    } else {
      console.error('Title Analysis Failed:', result.error);
      return NextResponse.json(
        { 
          success: false, 
          error: result.error || 'Title analysis failed' 
        },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Title Analysis Error:', error);
    console.error('Title Analysis Error Stack:', error instanceof Error ? error.stack : 'No stack trace');
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error',
        details: error instanceof Error ? error.stack : 'No details available'
      },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { SummaryAnalysisService } from '@/lib/analysis/services/SummaryAnalysisService';

const summaryService = new SummaryAnalysisService();

export async function POST(request: NextRequest) {
  try {
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
    });

    const result = await summaryService.analyze(content, { noteId });

    if (result.status === 'completed' && result.result) {
      console.log('Summary Analysis Completed:', {
        noteId: result.noteId,
        processingTime: result.processingTime,
        summaryLength: result.result.summary?.length || 0,
        confidence: result.result.confidence,
      });

      return NextResponse.json({
        success: true,
        data: result.result,
        metadata: {
          processingTime: result.processingTime,
          confidence: result.result.confidence,
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


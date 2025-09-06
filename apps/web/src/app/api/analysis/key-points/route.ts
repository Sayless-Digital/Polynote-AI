import { NextRequest, NextResponse } from 'next/server';
import { KeyPointsAnalysisService } from '@/lib/analysis/services/KeyPointsAnalysisService';

const keyPointsService = new KeyPointsAnalysisService();

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

    console.log('Key Points Analysis Request:', {
      noteId: noteId || 'unknown',
      contentLength: content.length,
    });

    const result = await keyPointsService.analyze(content, { noteId });

    if (result.status === 'completed' && result.result) {
      console.log('Key Points Analysis Completed:', {
        noteId: result.noteId,
        processingTime: result.processingTime,
        keyPointsCount: result.result.keyPoints?.length || 0,
        averageImportance: result.result.averageImportance,
      });

      return NextResponse.json({
        success: true,
        data: result.result,
        metadata: {
          processingTime: result.processingTime,
          keyPointsCount: result.result.keyPoints?.length || 0,
        },
      });
    } else {
      console.error('Key Points Analysis Failed:', result.error);
      return NextResponse.json(
        { 
          success: false, 
          error: result.error || 'Key points analysis failed' 
        },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Key Points Analysis Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}


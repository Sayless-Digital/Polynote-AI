import { NextRequest, NextResponse } from 'next/server';
import { CategoriesAnalysisService } from '@/lib/analysis/services/CategoriesAnalysisService';

const categoriesService = new CategoriesAnalysisService();

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

    console.log('Categories Analysis Request:', {
      noteId: noteId || 'unknown',
      contentLength: content.length,
    });

    const result = await categoriesService.analyze(content, { noteId });

    if (result.status === 'completed' && result.result) {
      console.log('Categories Analysis Completed:', {
        noteId: result.noteId,
        processingTime: result.processingTime,
        categoriesCount: result.result.categories?.length || 0,
        primaryCategory: result.result.primaryCategory,
      });

      return NextResponse.json({
        success: true,
        data: result.result,
        metadata: {
          processingTime: result.processingTime,
          categoriesCount: result.result.categories?.length || 0,
        },
      });
    } else {
      console.error('Categories Analysis Failed:', result.error);
      return NextResponse.json(
        { 
          success: false, 
          error: result.error || 'Categories analysis failed' 
        },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Categories Analysis Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}


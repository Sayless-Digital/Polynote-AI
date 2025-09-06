import { NextRequest, NextResponse } from 'next/server';
import { AnalysisOrchestrator } from '@/lib/analysis/AnalysisOrchestrator';
import { AnalysisType } from '@/lib/analysis/types';

const orchestrator = new AnalysisOrchestrator();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { noteId, content, config, forceRefresh } = body;

    if (!noteId || !content?.trim()) {
      return NextResponse.json(
        { error: 'Note ID and content are required' },
        { status: 400 }
      );
    }

    console.log('Comprehensive Analysis Request:', {
      noteId,
      contentLength: content.length,
      forceRefresh,
      config,
    });

    const analysisRequest = {
      noteId,
      content: content.trim(),
      config: {
        enabledAnalyses: config?.enabledAnalyses || [
          AnalysisType.TITLE,
          AnalysisType.SUMMARY,
          AnalysisType.KEY_POINTS,
          AnalysisType.CATEGORIES,
          AnalysisType.TAGS,
          AnalysisType.SENTIMENT,
        ],
        priority: config?.priority || [
          AnalysisType.TITLE,
          AnalysisType.SUMMARY,
          AnalysisType.KEY_POINTS,
          AnalysisType.CATEGORIES,
          AnalysisType.TAGS,
          AnalysisType.SENTIMENT,
        ],
        timeout: config?.timeout || 30000,
        retryAttempts: config?.retryAttempts || 2,
        cacheEnabled: config?.cacheEnabled !== false,
        cacheTTL: config?.cacheTTL || 24 * 60 * 60 * 1000,
      },
      forceRefresh: forceRefresh || false,
    };

    const result = await orchestrator.analyze(analysisRequest);

    if (result.success && result.data) {
      console.log('Comprehensive Analysis Completed:', {
        noteId,
        overallConfidence: result.data.overallConfidence,
        processingTime: result.data.processingTime,
        completedAnalyses: Object.keys(result.data.analyses).length,
      });

      return NextResponse.json({
        success: true,
        data: result.data,
      });
    } else {
      console.error('Comprehensive Analysis Failed:', result.error);
      return NextResponse.json(
        { 
          success: false, 
          error: result.error || 'Analysis failed',
          partialResults: result.partialResults,
        },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Comprehensive Analysis Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const stats = orchestrator.getStats();
    
    return NextResponse.json({
      success: true,
      stats,
    });
  } catch (error) {
    console.error('Analysis Stats Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}


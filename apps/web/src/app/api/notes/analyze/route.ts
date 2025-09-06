import { NextRequest, NextResponse } from 'next/server';
import { analyzeNote } from '@/lib/ai';
import { AnalysisOrchestrator } from '@/lib/analysis/AnalysisOrchestrator';
import { AnalysisType } from '@/lib/analysis/types';

// Try to initialize the new system, but fallback to old system if it fails
let orchestrator: AnalysisOrchestrator | null = null;
try {
  orchestrator = new AnalysisOrchestrator();
  console.log('New analysis system initialized successfully');
} catch (error) {
  console.error('Failed to initialize new analysis system, using fallback:', error);
  orchestrator = null;
}

export async function POST(request: NextRequest) {
  try {
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
      hasFileContent: content.includes('--- Content from'),
      contentPreview: content.substring(0, 200) + (content.length > 200 ? '...' : ''),
      fileContentSections: (content.match(/--- Content from .+? ---/g) || []).length,
      usingNewSystem: !!orchestrator,
    });

    // Try new system first, fallback to old system
    if (orchestrator) {
      try {
        const analysisRequest = {
          noteId: noteId || `legacy_${Date.now()}`,
          content: content.trim(),
          config: {
            enabledAnalyses: [
              AnalysisType.TITLE,
              AnalysisType.SUMMARY,
              AnalysisType.KEY_POINTS,
              AnalysisType.CATEGORIES,
              AnalysisType.TAGS,
              AnalysisType.SENTIMENT,
            ],
            priority: [
              AnalysisType.TITLE,
              AnalysisType.SUMMARY,
              AnalysisType.KEY_POINTS,
              AnalysisType.CATEGORIES,
              AnalysisType.TAGS,
              AnalysisType.SENTIMENT,
            ],
            timeout: 30000,
            retryAttempts: 2,
            cacheEnabled: true,
            cacheTTL: 24 * 60 * 60 * 1000,
          },
          forceRefresh: false,
        };

        const result = await orchestrator.analyze(analysisRequest, user.id);

        if (result.success && result.data) {
          // Transform the new format to the legacy format for backward compatibility
          const legacyFormat = {
            title: result.data.analyses[AnalysisType.TITLE]?.result?.title || title || 'Untitled Note',
            summary: result.data.analyses[AnalysisType.SUMMARY]?.result?.summary || '',
            tags: result.data.analyses[AnalysisType.TAGS]?.result?.tags?.map((t: any) => t.tag) || [],
            categories: result.data.analyses[AnalysisType.CATEGORIES]?.result?.categories?.map((c: any) => c.name) || [],
            sentiment: result.data.analyses[AnalysisType.SENTIMENT]?.result?.sentiment || 'neutral',
            keyPoints: result.data.analyses[AnalysisType.KEY_POINTS]?.result?.keyPoints?.map((kp: any) => kp.point) || [],
            // Include new metadata
            metadata: {
              overallConfidence: result.data.overallConfidence,
              processingTime: result.data.processingTime,
              analysisVersion: result.data.version,
              detailedResults: {
                summary: result.data.analyses[AnalysisType.SUMMARY]?.result,
                keyPoints: result.data.analyses[AnalysisType.KEY_POINTS]?.result,
                categories: result.data.analyses[AnalysisType.CATEGORIES]?.result,
                tags: result.data.analyses[AnalysisType.TAGS]?.result,
                sentiment: result.data.analyses[AnalysisType.SENTIMENT]?.result,
                title: result.data.analyses[AnalysisType.TITLE]?.result,
              },
            },
          };

          console.log('AI Analysis - New System Result:', {
            title: legacyFormat.title,
            tags: legacyFormat.tags,
            categories: legacyFormat.categories,
            summaryLength: legacyFormat.summary?.length || 0,
            overallConfidence: legacyFormat.metadata.overallConfidence,
            processingTime: legacyFormat.metadata.processingTime,
          });

          return NextResponse.json(legacyFormat);
        } else {
          console.error('New system failed, falling back to old system:', result.error);
        }
      } catch (error) {
        console.error('New system error, falling back to old system:', error);
      }
    }

    // Fallback to old system
    console.log('Using legacy analysis system');
    const analysis = await analyzeNote(content);

    console.log('AI Analysis - Legacy Result:', {
      title: analysis.title,
      tags: analysis.tags,
      categories: analysis.categories,
      summaryLength: analysis.summary?.length || 0
    });

    return NextResponse.json(analysis);

  } catch (error) {
    console.error('Error analyzing note:', error);
    return NextResponse.json(
      { error: 'Failed to analyze note' },
      { status: 500 }
    );
  }
}

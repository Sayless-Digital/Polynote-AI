import { NextRequest, NextResponse } from 'next/server';
import { analyzeNote } from '@/lib/ai';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { content, title } = body;

    if (!content?.trim()) {
      return NextResponse.json(
        { error: 'Content is required' },
        { status: 400 }
      );
    }

    console.log('AI Analysis - Content received:', {
      contentLength: content.length,
      hasFileContent: content.includes('--- Content from'),
      contentPreview: content.substring(0, 200) + (content.length > 200 ? '...' : ''),
      fileContentSections: (content.match(/--- Content from .+? ---/g) || []).length,
      fullContent: content
    });

    // Use the existing AI analysis function
    // Content now includes both user text and extracted file content
    const analysis = await analyzeNote(content);

    console.log('AI Analysis - Result:', {
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

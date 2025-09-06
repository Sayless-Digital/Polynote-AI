import { NextRequest, NextResponse } from 'next/server';
import { analyzeNote } from '@/lib/ai';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { content } = body;

    if (!content?.trim()) {
      return NextResponse.json(
        { error: 'Content is required' },
        { status: 400 }
      );
    }

    console.log('🧪 Testing AI with content:', content.substring(0, 100) + '...');

    // Test the AI analysis
    const analysis = await analyzeNote(content);
    
    console.log('✅ AI Test successful:', analysis);

    return NextResponse.json({
      success: true,
      analysis,
      message: 'AI test completed successfully'
    });

  } catch (error) {
    console.error('❌ AI Test failed:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error',
        message: 'AI test failed'
      },
      { status: 500 }
    );
  }
}
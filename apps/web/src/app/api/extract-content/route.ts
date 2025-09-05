import { NextRequest, NextResponse } from 'next/server';
import { extractTextFromFile } from '@/lib/file-extraction';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    console.log(`Extracting content from file: ${file.name} (${file.size} bytes, ${file.type})`);

    // Extract text content from the file
    const extracted = await extractTextFromFile(file);

    console.log(`Extraction result for ${file.name}:`, {
      success: extracted.success,
      type: extracted.type,
      textLength: extracted.text.length,
      error: extracted.error
    });

    return NextResponse.json({
      success: extracted.success,
      content: extracted.text,
      type: extracted.type,
      error: extracted.error,
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type
    });

  } catch (error) {
    console.error('Error extracting file content:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      fileName: (formData?.get('file') as File)?.name || 'unknown'
    });
    return NextResponse.json(
      { 
        error: 'Failed to extract file content',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

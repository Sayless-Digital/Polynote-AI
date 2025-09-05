import { NextRequest, NextResponse } from 'next/server';
import { analyzeNote } from '@/lib/ai';
import { extractTextFromFiles } from '@/lib/file-extraction';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { content, title, files } = body;

    if (!content?.trim() && (!files || files.length === 0)) {
      return NextResponse.json(
        { error: 'Content or files are required' },
        { status: 400 }
      );
    }

    let finalContent = content || '';

    // Process attached files if any
    if (files && files.length > 0) {
      try {
        // Convert file data back to File objects for processing
        const fileObjects = files.map((fileData: any) => {
          const file = new File([fileData.content], fileData.name, { type: fileData.type });
          return file;
        });

        const { combinedText, supportedFiles, totalFiles } = await extractTextFromFiles(fileObjects);
        
        if (combinedText) {
          finalContent += `\n\n--- Attached Files (${supportedFiles}/${totalFiles} processed) ---\n${combinedText}`;
        }
      } catch (fileError) {
        console.error('Error processing files:', fileError);
        // Continue with just the text content if file processing fails
      }
    }

    // Use the existing AI analysis function with combined content
    const analysis = await analyzeNote(finalContent);

    return NextResponse.json(analysis);
  } catch (error) {
    console.error('Error analyzing note:', error);
    return NextResponse.json(
      { error: 'Failed to analyze note' },
      { status: 500 }
    );
  }
}

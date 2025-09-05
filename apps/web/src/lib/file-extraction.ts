// Import pdf-parse dynamically to avoid initialization issues
let pdf: any = null;
let mammoth: any = null;

// Lazy load pdf-parse
async function loadPdfParser() {
  if (!pdf) {
    try {
      pdf = (await import('pdf-parse')).default;
    } catch (error) {
      console.warn('Failed to load pdf-parse:', error);
      return null;
    }
  }
  return pdf;
}

// Lazy load mammoth
async function loadMammoth() {
  if (!mammoth) {
    try {
      mammoth = await import('mammoth');
    } catch (error) {
      console.warn('Failed to load mammoth:', error);
      return null;
    }
  }
  return mammoth;
}

export interface ExtractedContent {
  text: string;
  type: 'text' | 'pdf' | 'docx' | 'unsupported';
  success: boolean;
  error?: string;
}

/**
 * Extract text content from various file types
 */
export async function extractTextFromFile(file: File): Promise<ExtractedContent> {
  const fileName = file.name.toLowerCase();
  const fileType = file.type;

  try {
    // Handle text files
    if (fileType.startsWith('text/') || fileName.endsWith('.txt') || fileName.endsWith('.md')) {
      try {
        const text = await file.text();
        return {
          text: text.trim(),
          type: 'text',
          success: true
        };
      } catch (textError) {
        console.warn(`Failed to read text file ${fileName}:`, textError);
        // Try reading as array buffer and convert to string
        try {
          const arrayBuffer = await file.arrayBuffer();
          const decoder = new TextDecoder('utf-8', { fatal: false });
          const text = decoder.decode(arrayBuffer);
          return {
            text: text.trim(),
            type: 'text',
            success: true
          };
        } catch (bufferError) {
          console.error(`Failed to read text file ${fileName} as buffer:`, bufferError);
          return {
            text: `[Text file: ${file.name}] - Could not read file content. The file may be corrupted or use an unsupported encoding.`,
            type: 'text',
            success: false,
            error: 'Text file reading failed'
          };
        }
      }
    }

    // Handle PDF files
    if (fileType === 'application/pdf' || fileName.endsWith('.pdf')) {
      try {
        const pdfParser = await loadPdfParser();
        if (!pdfParser) {
          return {
            text: `[PDF file: ${file.name}] - PDF parsing library not available.`,
            type: 'pdf',
            success: false,
            error: 'PDF parser not available'
          };
        }
        
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const data = await pdfParser(buffer);
        return {
          text: data.text.trim(),
          type: 'pdf',
          success: true
        };
      } catch (pdfError) {
        console.error(`Failed to parse PDF ${fileName}:`, pdfError);
        return {
          text: `[PDF file: ${file.name}] - Could not extract text from PDF. The file may be corrupted, password-protected, or contain only images.`,
          type: 'pdf',
          success: false,
          error: 'PDF parsing failed'
        };
      }
    }

    // Handle DOCX files
    if (fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || 
        fileName.endsWith('.docx')) {
      try {
        const mammothLib = await loadMammoth();
        if (!mammothLib) {
          return {
            text: `[DOCX file: ${file.name}] - DOCX parsing library not available.`,
            type: 'docx',
            success: false,
            error: 'DOCX parser not available'
          };
        }
        
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const result = await mammothLib.extractRawText({ buffer });
        return {
          text: result.value.trim(),
          type: 'docx',
          success: true
        };
      } catch (docxError) {
        console.error(`Failed to parse DOCX ${fileName}:`, docxError);
        return {
          text: `[DOCX file: ${file.name}] - Could not extract text from DOCX. The file may be corrupted or use an unsupported format.`,
          type: 'docx',
          success: false,
          error: 'DOCX parsing failed'
        };
      }
    }

    // Handle DOC files (basic support)
    if (fileName.endsWith('.doc')) {
      return {
        text: `[DOC file: ${file.name}] - Content extraction not supported for .doc files. Please convert to .docx for full text extraction.`,
        type: 'unsupported',
        success: false,
        error: 'DOC files not supported'
      };
    }

    // Handle images (placeholder for future implementation)
    if (fileType.startsWith('image/')) {
      return {
        text: `[Image file: ${file.name}] - Image content analysis not yet implemented.`,
        type: 'unsupported',
        success: false,
        error: 'Image analysis not implemented'
      };
    }

    // Handle audio/video (placeholder for future implementation)
    if (fileType.startsWith('audio/') || fileType.startsWith('video/')) {
      return {
        text: `[Media file: ${file.name}] - Audio/video transcription not yet implemented.`,
        type: 'unsupported',
        success: false,
        error: 'Media transcription not implemented'
      };
    }

    // Unsupported file type
    return {
      text: `[File: ${file.name}] - File type not supported for content extraction.`,
      type: 'unsupported',
      success: false,
      error: 'Unsupported file type'
    };

  } catch (error) {
    console.error('Error extracting text from file:', error);
    return {
      text: `[Error processing ${file.name}] - Could not extract content from this file.`,
      type: 'unsupported',
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Extract text from multiple files
 */
export async function extractTextFromFiles(files: File[]): Promise<{
  extractedTexts: ExtractedContent[];
  combinedText: string;
  supportedFiles: number;
  totalFiles: number;
}> {
  const extractedTexts: ExtractedContent[] = [];
  let combinedText = '';
  let supportedFiles = 0;

  for (const file of files) {
    const extracted = await extractTextFromFile(file);
    extractedTexts.push(extracted);
    
    if (extracted.success) {
      supportedFiles++;
      combinedText += `\n\n--- Content from ${file.name} ---\n${extracted.text}`;
    } else {
      combinedText += `\n\n--- ${file.name} (${extracted.error}) ---\n${extracted.text}`;
    }
  }

  return {
    extractedTexts,
    combinedText: combinedText.trim(),
    supportedFiles,
    totalFiles: files.length
  };
}

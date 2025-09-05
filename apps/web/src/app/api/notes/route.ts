import { NextRequest, NextResponse } from 'next/server';
import { db } from '@polynote/db';
import { notes, attachments } from '@polynote/db';
import { analyzeNote } from '@/lib/ai';
import { sql, desc, and, or, ilike, eq } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    const category = searchParams.get('category');
    const tag = searchParams.get('tag');

    // Build conditions array for better query optimization
    const conditions = [];

    // Optimize search with proper indexing
    if (search) {
      const searchTerm = `%${search}%`;
      conditions.push(
        or(
          ilike(notes.title, searchTerm),
          ilike(notes.content, searchTerm)
        )
      );
    }

    // Optimize category filter
    if (category) {
      conditions.push(sql`${notes.categories}::text LIKE ${`%${category}%`}`);
    }

    // Optimize tag filter
    if (tag) {
      conditions.push(sql`${notes.tags}::text LIKE ${`%${tag}%`}`);
    }

    // Build optimized query
    let query = db.select().from(notes);
    
    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }

    const result = await query
      .orderBy(desc(notes.createdAt))
      .limit(50); // Reduced limit for better performance

    // Add optimized cache headers and compression
    const response = NextResponse.json(result);
    response.headers.set('Cache-Control', 'public, max-age=60, stale-while-revalidate=120');
    response.headers.set('ETag', `"notes-${Date.now()}"`);
    response.headers.set('Vary', 'Accept-Encoding');
    
    return response;
  } catch (error) {
    console.error('Error fetching notes:', error);
    return NextResponse.json(
      { error: 'Failed to fetch notes' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, content, transcript, tags, categories, attachments: uploadedFiles, aiAnalysis } = body;

    if (!content?.trim()) {
      return NextResponse.json(
        { error: 'Content is required' },
        { status: 400 }
      );
    }

    // Use AI analysis from frontend if provided, otherwise do our own analysis
    let finalAiAnalysis = aiAnalysis;
    
    if (!finalAiAnalysis && content.trim()) {
      try {
        const contentToAnalyze = transcript || content;
        finalAiAnalysis = await analyzeNote(contentToAnalyze);
      } catch (aiError) {
        console.error('AI analysis failed:', aiError);
      }
    }

    // Prepare the note data - prioritize AI-generated title and summary
    const noteData = {
      title: finalAiAnalysis?.title || title || 'Untitled Note',
      content,
      transcript: transcript || null,
      summary: finalAiAnalysis?.summary || null,
      tags: finalAiAnalysis?.tags || tags || [],
      categories: finalAiAnalysis?.categories || categories || [],
      metadata: finalAiAnalysis ? {
        sentiment: finalAiAnalysis.sentiment,
        keyPoints: finalAiAnalysis.keyPoints,
      } : null,
    };

    // Save to database
    const result = await db.insert(notes).values(noteData).returning();
    const savedNote = result[0];

    // Save file attachments if any
    if (uploadedFiles && uploadedFiles.length > 0) {
      const attachmentData = uploadedFiles.map((file: any) => ({
        noteId: savedNote.id,
        filename: file.filename,
        originalName: file.originalName,
        size: file.size.toString(),
        type: file.type,
        url: file.url,
        content: file.content || null, // Store extracted content for search
      }));

      await db.insert(attachments).values(attachmentData);
    }

    return NextResponse.json(savedNote);
  } catch (error) {
    console.error('Error creating note:', error);
    return NextResponse.json(
      { error: 'Failed to create note' },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { db } from '@polynote/db';
import { notes } from '@polynote/db';
import { analyzeNote } from '@/lib/ai';
import { sql, desc, and, or, ilike } from 'drizzle-orm';

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
    const { title, content, transcript, tags, categories } = body;

    if (!content?.trim()) {
      return NextResponse.json(
        { error: 'Content is required' },
        { status: 400 }
      );
    }

    // Always use AI to analyze the note and generate title/summary
    let aiAnalysis = null;
    
    if (content.trim()) {
      try {
        const contentToAnalyze = transcript || content;
        aiAnalysis = await analyzeNote(contentToAnalyze);
      } catch (aiError) {
        console.error('AI analysis failed:', aiError);
      }
    }

    // Prepare the note data - prioritize AI-generated title and summary
    const noteData = {
      title: aiAnalysis?.title || title || 'Untitled Note',
      content,
      transcript: transcript || null,
      summary: aiAnalysis?.summary || null,
      tags: aiAnalysis?.tags || tags || [],
      categories: aiAnalysis?.categories || categories || [],
      metadata: aiAnalysis ? {
        sentiment: aiAnalysis.sentiment,
        keyPoints: aiAnalysis.keyPoints,
      } : null,
    };

    // Save to database
    const result = await db.insert(notes).values(noteData).returning();

    return NextResponse.json(result[0]);
  } catch (error) {
    console.error('Error creating note:', error);
    return NextResponse.json(
      { error: 'Failed to create note' },
      { status: 500 }
    );
  }
}

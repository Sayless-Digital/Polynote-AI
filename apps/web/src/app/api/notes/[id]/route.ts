import { NextRequest, NextResponse } from 'next/server';
import { db } from '@polynote/db';
import { notes, attachments } from '@polynote/db';
import { getCurrentUser } from '@/lib/auth';
import { eq, and } from 'drizzle-orm';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Get the current user
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const noteId = await params.id;

    if (!noteId) {
      return NextResponse.json(
        { error: 'Note ID is required' },
        { status: 400 }
      );
    }

    // Fetch note with attachments - only if user owns it
    const noteResult = await db
      .select()
      .from(notes)
      .where(and(eq(notes.id, noteId), eq(notes.userId, user.id)))
      .limit(1);

    if (noteResult.length === 0) {
      return NextResponse.json(
        { error: 'Note not found' },
        { status: 404 }
      );
    }

    // Fetch attachments for this note
    const attachmentsResult = await db
      .select()
      .from(attachments)
      .where(eq(attachments.noteId, noteId));

    const note = noteResult[0];
    const noteWithAttachments = {
      ...note,
      attachments: attachmentsResult,
    };

    // Add cache headers for individual notes
    const response = NextResponse.json(noteWithAttachments);
    response.headers.set('Cache-Control', 'public, max-age=300, stale-while-revalidate=600');
    response.headers.set('ETag', `"note-${noteId}-${note.updatedAt}"`);
    
    return response;
  } catch (error) {
    console.error('Error fetching note:', error);
    return NextResponse.json(
      { error: 'Failed to fetch note' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Get the current user
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const noteId = await params.id;
    const body = await request.json();
    const { title, content, summary } = body;

    if (!noteId) {
      return NextResponse.json(
        { error: 'Note ID is required' },
        { status: 400 }
      );
    }

    if (!title?.trim() || !content?.trim()) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      );
    }

    const result = await db
      .update(notes)
      .set({
        title: title.trim(),
        content: content.trim(),
        summary: summary?.trim() || null,
        updatedAt: new Date(),
      })
      .where(and(eq(notes.id, noteId), eq(notes.userId, user.id)))
      .returning();

    if (result.length === 0) {
      return NextResponse.json(
        { error: 'Note not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(result[0]);
  } catch (error) {
    console.error('Error updating note:', error);
    return NextResponse.json(
      { error: 'Failed to update note' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Get the current user
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const noteId = await params.id;

    if (!noteId) {
      return NextResponse.json(
        { error: 'Note ID is required' },
        { status: 400 }
      );
    }

    const result = await db
      .delete(notes)
      .where(and(eq(notes.id, noteId), eq(notes.userId, user.id)))
      .returning();

    if (result.length === 0) {
      return NextResponse.json(
        { error: 'Note not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, deletedNote: result[0] });
  } catch (error) {
    console.error('Error deleting note:', error);
    return NextResponse.json(
      { error: 'Failed to delete note' },
      { status: 500 }
    );
  }
}

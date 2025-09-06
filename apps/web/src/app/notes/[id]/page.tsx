'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Skeleton } from '@/components/ui/skeleton';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { AppHeader } from '@/components/AppHeader';
import { useAuth } from '@/hooks/useAuth';
import { ArrowLeft, Calendar, Tag, Save, Trash2, Bot, FileText, Download, ChevronDown, ChevronRight, PenTool, MessageSquare } from 'lucide-react';

interface Attachment {
  id: string;
  noteId: string;
  filename: string;
  originalName: string;
  size: string;
  type: string;
  url: string;
  content?: string;
  createdAt: string;
}

interface Note {
  id: string;
  title: string;
  content: string;
  transcript?: string;
  summary?: string;
  tags: string[];
  categories: string[];
  metadata?: {
    sentiment?: string;
    keyPoints?: string[];
  };
  attachments?: Attachment[];
  createdAt: string;
  updatedAt: string;
}

type SaveState = 'idle' | 'saving' | 'saved' | 'error';

export default function ViewNotePage() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, isAuthenticated, signOut } = useAuth();
  const [note, setNote] = useState<Note | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Inline editing state
  const [editedTitle, setEditedTitle] = useState('');
  const [editedContent, setEditedContent] = useState('');
  const [editedSummary, setEditedSummary] = useState('');
  const [hasChanges, setHasChanges] = useState(false);
  const [saveState, setSaveState] = useState<SaveState>('idle');
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  
  // Auto-save
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastSavedRef = useRef<{ title: string; content: string } | null>(null);
  
  // Refs for editable divs
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);

  const noteId = params.id as string;

  // Update content only when note changes, not on every render
  useEffect(() => {
    if (note && titleRef.current) {
      titleRef.current.textContent = editedTitle;
    }
  }, [note?.id]); // Only when note ID changes

  useEffect(() => {
    if (note && contentRef.current) {
      contentRef.current.textContent = editedContent;
    }
  }, [note?.id]); // Only when note ID changes

  useEffect(() => {
    if (note && summaryRef.current) {
      summaryRef.current.textContent = editedSummary;
    }
  }, [note?.id]); // Only when note ID changes

  useEffect(() => {
    const fetchNote = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/notes/${noteId}`, {
          cache: 'default',
          next: { revalidate: 300 }, // Cache for 5 minutes
        });
        
        if (response.ok) {
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const data = await response.json();
            setNote(data);
            setEditedTitle(data.title);
            setEditedContent(data.content);
            setEditedSummary(data.summary || '');
            lastSavedRef.current = { title: data.title, content: data.content };
          } else {
            setError('Server returned invalid response format');
          }
        } else if (response.status === 404) {
          setError('Note not found');
        } else {
          setError('Failed to load note');
        }
      } catch (err) {
        setError('Error loading note');
        console.error('Error fetching note:', err);
      } finally {
        setLoading(false);
      }
    };

    if (noteId) {
      fetchNote();
    }
  }, [noteId]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleBack = () => {
    // Check if there's a return URL parameter
    const returnUrl = searchParams.get('return');
    if (returnUrl) {
      router.push(returnUrl);
    } else {
      // Default to home page with review view
      router.push('/?view=review');
    }
  };

  const handleNavigation = (view: 'take' | 'review' | 'chat') => {
    router.push(`/?view=${view}`);
  };

  // Check for changes
  useEffect(() => {
    if (note && lastSavedRef.current) {
      const hasTitleChanged = editedTitle !== lastSavedRef.current.title;
      const hasContentChanged = editedContent !== lastSavedRef.current.content;
      const hasSummaryChanged = editedSummary !== (note.summary || '');
      setHasChanges(hasTitleChanged || hasContentChanged || hasSummaryChanged);
    }
  }, [editedTitle, editedContent, editedSummary, note]);

  // Auto-save function
  const saveNote = useCallback(async () => {
    if (!note || !hasChanges) return;

    try {
      setSaveState('saving');
      
      // Always generate AI title and summary when saving
      let finalTitle = editedTitle;
      let finalSummary = editedSummary;
      
      if (editedContent.trim()) {
        try {
          const analysisResponse = await fetch('/api/notes/analyze', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              content: editedContent,
              title: editedTitle,
            }),
          });

          if (analysisResponse.ok) {
            try {
              const contentType = analysisResponse.headers.get('content-type');
              if (contentType && contentType.includes('application/json')) {
                const analysis = await analysisResponse.json();
                
                // Always update title with AI-generated one
                if (analysis.title && analysis.title.trim()) {
                  finalTitle = analysis.title.trim();
                  setEditedTitle(finalTitle);
                  if (titleRef.current) {
                    titleRef.current.textContent = finalTitle;
                  }
                }
                
                // Always update summary with AI-generated one
                if (analysis.summary && analysis.summary.trim()) {
                  finalSummary = analysis.summary.trim();
                  setEditedSummary(finalSummary);
                  if (summaryRef.current) {
                    summaryRef.current.textContent = finalSummary;
                  }
                }
              } else {
                console.warn('AI analysis returned non-JSON response');
              }
            } catch (parseError) {
              console.warn('Failed to parse AI analysis response:', parseError);
            }
          }
        } catch (aiError) {
          console.error('Error generating AI title and summary:', aiError);
          // Continue with original values if AI fails
        }
      }

      const response = await fetch(`/api/notes/${noteId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: finalTitle,
          content: editedContent,
          summary: finalSummary,
        }),
      });

      if (response.ok) {
        try {
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const updatedNote = await response.json();
            setNote(updatedNote);
            lastSavedRef.current = { title: finalTitle, content: editedContent };
            setHasChanges(false);
            setSaveState('saved');
            
            // Reset to idle after showing saved state
            setTimeout(() => setSaveState('idle'), 2000);
          } else {
            console.warn('Save note returned non-JSON response');
            setSaveState('error');
            setTimeout(() => setSaveState('idle'), 3000);
          }
        } catch (parseError) {
          console.warn('Failed to parse save response:', parseError);
          setSaveState('error');
          setTimeout(() => setSaveState('idle'), 3000);
        }
      } else {
        setSaveState('error');
        setTimeout(() => setSaveState('idle'), 3000);
      }
    } catch (err) {
      console.error('Error saving note:', err);
      setSaveState('error');
      setTimeout(() => setSaveState('idle'), 3000);
    }
  }, [note, noteId, editedTitle, editedContent, editedSummary, hasChanges]);

  // Auto-save with debouncing
  useEffect(() => {
    if (hasChanges) {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
      
      saveTimeoutRef.current = setTimeout(() => {
        saveNote();
      }, 1000); // Auto-save after 1 second of no changes
    }

    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, [hasChanges, saveNote]);

  // Manual save function
  const handleManualSave = () => {
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }
    saveNote();
  };

  // Regenerate summary using AI
  const handleRegenerateSummary = async () => {
    if (!note) return;
    
    try {
      setSaveState('saving');
      const response = await fetch('/api/notes/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: editedContent,
          title: editedTitle,
        }),
      });

      if (response.ok) {
        try {
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const analysis = await response.json();
            const newSummary = analysis.summary || '';
            setEditedSummary(newSummary);
            if (summaryRef.current) {
              summaryRef.current.textContent = newSummary;
            }
            setHasChanges(true);
          } else {
            console.error('Failed to generate summary: non-JSON response');
          }
        } catch (parseError) {
          console.error('Failed to parse summary response:', parseError);
        }
      } else {
        console.error('Failed to generate summary');
      }
    } catch (error) {
      console.error('Error generating summary:', error);
    } finally {
      setSaveState('idle');
    }
  };

  // Generate title using AI
  const handleGenerateTitle = async () => {
    if (!editedContent.trim()) return;
    
    try {
      setSaveState('saving');
      const response = await fetch('/api/notes/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: editedContent,
          title: editedTitle,
        }),
      });

      if (response.ok) {
        try {
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const analysis = await response.json();
            if (analysis.title && analysis.title.trim()) {
              const newTitle = analysis.title.trim();
              setEditedTitle(newTitle);
              if (titleRef.current) {
                titleRef.current.textContent = newTitle;
              }
              setHasChanges(true);
            }
          } else {
            console.error('Failed to generate title: non-JSON response');
          }
        } catch (parseError) {
          console.error('Failed to parse title response:', parseError);
        }
      } else {
        console.error('Failed to generate title');
      }
    } catch (error) {
      console.error('Error generating title:', error);
    } finally {
      setSaveState('idle');
    }
  };

  // Dynamic save button component
  const SaveButton = () => {
    const getButtonProps = () => {
      switch (saveState) {
        case 'saving':
          return {
            variant: 'default' as const,
            className: 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-600 dark:text-blue-400 animate-pulse backdrop-blur-[1px] border border-blue-200/30',
            children: (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 dark:border-blue-400 mr-2 flex-shrink-0"></div>
                <span>Saving...</span>
              </>
            ),
          };
        case 'saved':
          return {
            variant: 'default' as const,
            className: 'bg-green-500/20 hover:bg-green-500/30 text-green-600 dark:text-green-400 backdrop-blur-[1px] border border-green-200/30',
            children: (
              <>
                <Save className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>Saved</span>
              </>
            ),
          };
        case 'error':
          return {
            variant: 'destructive' as const,
            className: 'bg-red-500/20 hover:bg-red-500/30 text-red-600 dark:text-red-400 backdrop-blur-[1px] border border-red-200/30',
            children: (
              <>
                <Save className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>Error</span>
              </>
            ),
          };
        default:
          return {
            variant: hasChanges ? ('default' as const) : ('outline' as const),
            className: hasChanges 
              ? 'bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-600 dark:text-yellow-400 backdrop-blur-[1px] border border-yellow-200/30' 
              : 'text-muted-foreground bg-background/5 backdrop-blur-[1px] border border-border/10',
            children: (
              <>
                <Save className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>{hasChanges ? 'Save' : 'Saved'}</span>
              </>
            ),
          };
      }
    };

    const buttonProps = getButtonProps();

    return (
      <Button
        variant={buttonProps.variant}
        size="sm"
        onClick={handleManualSave}
        disabled={!hasChanges && saveState === 'idle'}
        className={`${buttonProps.className} h-8 min-h-[2rem] flex items-center justify-center`}
      >
        {buttonProps.children}
      </Button>
    );
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/notes/${noteId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setDeleteDialogOpen(false);
        router.push('/');
      } else {
        alert('Failed to delete note');
      }
    } catch (err) {
      console.error('Error deleting note:', err);
      alert('Error deleting note');
    }
  };

  // Don't show anything while loading, let the global loader handle it
  if (loading) {
    return null;
  }

  if (error || !note) {
    return (
      <div className="h-screen w-screen bg-background/10 backdrop-blur-[1px] flex flex-col overflow-hidden">
        <AppHeader onViewChange={handleNavigation} />

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Button variant="outline" size="icon" onClick={handleBack}>
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <h1 className="text-2xl font-bold">Error</h1>
            </div>
            
            <Card className="bg-background/5 backdrop-blur-[1px] border-border/10 shadow-sm">
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground mb-4">
                  {error || 'Note not found'}
                </p>
                <Button onClick={handleBack}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Go Back
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen bg-background/10 backdrop-blur-[1px] flex flex-col overflow-hidden relative">
      {/* Animated Background - Full Screen */}
      <div className="fixed inset-0 h-full w-full overflow-hidden pointer-events-none">
        {/* Primary gradient orb */}
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full mix-blend-normal opacity-30 bg-gradient-to-br from-purple-400 via-purple-600 to-pink-400 animate-float-1" />

        {/* Secondary gradient orb */}
        <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full mix-blend-normal opacity-25 bg-gradient-to-br from-blue-400 via-cyan-400 to-green-400 animate-float-2" />

        {/* Tertiary gradient orb */}
        <div className="absolute top-1/4 right-1/3 h-64 w-64 rounded-full mix-blend-normal opacity-20 bg-gradient-to-br from-pink-400 via-yellow-400 to-red-400 animate-float-3" />

        {/* Additional floating orbs */}
        <div className="absolute top-1/2 left-1/6 h-48 w-48 rounded-full mix-blend-normal opacity-15 bg-gradient-to-br from-teal-200 via-pink-200 to-purple-300 animate-float-4" />

        <div className="absolute bottom-1/3 left-1/2 h-56 w-56 rounded-full mix-blend-normal opacity-18 bg-gradient-to-br from-orange-200 via-pink-300 to-red-300 animate-float-5" />
      </div>

      <AppHeader onViewChange={handleNavigation} />

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-4 relative z-10">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Note Header */}
          <div className="flex items-start gap-4">
            <Button variant="outline" size="icon" onClick={handleBack} className="mt-1">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex-1 space-y-4">
              <div>
                <div className="mb-2">
                  <div
                    ref={titleRef}
                    contentEditable
                    suppressContentEditableWarning
                    className="text-2xl font-bold cursor-text hover:bg-muted/50 p-2 -m-2 rounded focus:outline-none focus:bg-muted/30 min-h-[2.5rem] w-full"
                    data-placeholder="Click to edit title..."
                    onInput={(e) => {
                      const newTitle = e.currentTarget.textContent || '';
                      setEditedTitle(newTitle);
                      setHasChanges(true);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        e.currentTarget.blur();
                      }
                      if (e.key === 'Escape') {
                        e.currentTarget.textContent = note.title;
                        setEditedTitle(note.title);
                        setHasChanges(false);
                        e.currentTarget.blur();
                      }
                      // Prevent line breaks in title
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        e.currentTarget.blur();
                      }
                    }}
                    onBlur={(e) => {
                      if (editedTitle.trim() === '') {
                        setEditedTitle(note.title);
                        e.currentTarget.textContent = note.title;
                      }
                    }}
                    onPaste={(e) => {
                      // Handle paste to clean up HTML and prevent line breaks
                      e.preventDefault();
                      const text = e.clipboardData.getData('text/plain').replace(/\n/g, ' ').trim();
                      document.execCommand('insertText', false, text);
                    }}
                  />
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Created {formatDate(note.createdAt)}</span>
                  {note.updatedAt !== note.createdAt && (
                    <>
                      <span>•</span>
                      <span>Updated {formatDate(note.updatedAt)}</span>
                    </>
                  )}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleGenerateTitle}
                  disabled={saveState === 'saving'}
                >
                  <Bot className="h-4 w-4 mr-2" />
                  Generate Title
                </Button>
                <SaveButton />
                <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </Button>
                  </DialogTrigger>
                <DialogContent className="bg-background/5 backdrop-blur-[1px] border-border/10 shadow-sm">
                  <DialogHeader>
                    <DialogTitle>Delete Note</DialogTitle>
                    <DialogDescription>
                      Are you sure you want to delete "{note.title}"? This action cannot be undone.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button variant="destructive" onClick={handleDelete}>
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              </div>
            </div>
          </div>

        {/* Tags and Categories */}
        {(note.tags.length > 0 || note.categories.length > 0) && (
          <div className="flex flex-wrap gap-3">
            {note.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-muted-foreground">Tags:</span>
                {note.tags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="secondary" 
                    className="flex items-center gap-1 bg-muted hover:bg-muted/80 transition-colors"
                  >
                    <Tag className="h-3 w-3" />
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
            {note.categories.length > 0 && (
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-muted-foreground">Categories:</span>
                {note.categories.map((category) => (
                  <Badge 
                    key={category} 
                    variant="outline" 
                    className="bg-muted/50 hover:bg-muted transition-colors capitalize"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        )}

        {/* AI Summary */}
        <Card className="bg-background/5 backdrop-blur-[1px] border-border/10 shadow-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <Bot className="h-5 w-5" />
                AI Summary
              </CardTitle>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleRegenerateSummary}
                disabled={saveState === 'saving'}
              >
                <Bot className="h-4 w-4 mr-2" />
                Regenerate
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div
              ref={summaryRef}
              contentEditable
              suppressContentEditableWarning
              className="prose prose-sm max-w-none dark:prose-invert cursor-text hover:bg-muted/50 p-4 -m-4 rounded focus:outline-none focus:bg-muted/30 min-h-[100px] whitespace-pre-wrap"
              data-placeholder="AI-generated summary will appear here..."
              onInput={(e) => {
                const newSummary = e.currentTarget.textContent || '';
                setEditedSummary(newSummary);
                setHasChanges(true);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Escape') {
                  e.currentTarget.textContent = note.summary || '';
                  setEditedSummary(note.summary || '');
                  setHasChanges(false);
                  e.currentTarget.blur();
                }
                // Ctrl+Enter to save and blur
                if (e.key === 'Enter' && e.ctrlKey) {
                  e.preventDefault();
                  e.currentTarget.blur();
                }
              }}
              onBlur={(e) => {
                if (editedSummary.trim() === '') {
                  setEditedSummary(note.summary || '');
                  e.currentTarget.textContent = note.summary || '';
                }
              }}
              onPaste={(e) => {
                // Handle paste to preserve formatting but clean up HTML
                e.preventDefault();
                const text = e.clipboardData.getData('text/plain');
                document.execCommand('insertText', false, text);
              }}
            />
          </CardContent>
        </Card>

        {/* Main Content */}
        <Card className="bg-background/5 backdrop-blur-[1px] border-border/10 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Content</CardTitle>
            <CardDescription className="text-xs text-muted-foreground">
              Click to edit • Ctrl+Enter to save • Escape to cancel • Tab to indent
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div
              ref={contentRef}
              contentEditable
              suppressContentEditableWarning
              className="prose prose-sm max-w-none dark:prose-invert cursor-text hover:bg-muted/50 p-4 -m-4 rounded focus:outline-none focus:bg-muted/30 min-h-[200px] whitespace-pre-wrap"
              data-placeholder="Click to edit content..."
              onInput={(e) => {
                const newContent = e.currentTarget.textContent || '';
                setEditedContent(newContent);
                setHasChanges(true);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Escape') {
                  e.currentTarget.textContent = note.content;
                  setEditedContent(note.content);
                  setHasChanges(false);
                  e.currentTarget.blur();
                }
                // Ctrl+Enter to save and blur
                if (e.key === 'Enter' && e.ctrlKey) {
                  e.preventDefault();
                  e.currentTarget.blur();
                }
                // Tab to indent (prevent default tab behavior)
                if (e.key === 'Tab') {
                  e.preventDefault();
                  document.execCommand('insertText', false, '  ');
                }
              }}
              onBlur={(e) => {
                if (editedContent.trim() === '') {
                  setEditedContent(note.content);
                  e.currentTarget.textContent = note.content;
                }
              }}
              onPaste={(e) => {
                // Handle paste to preserve formatting but clean up HTML
                e.preventDefault();
                const text = e.clipboardData.getData('text/plain');
                document.execCommand('insertText', false, text);
              }}
            />
          </CardContent>
        </Card>

        {/* File Attachments */}
        {note.attachments && note.attachments.length > 0 && (
          <Card className="bg-background/5 backdrop-blur-[1px] border-border/10 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Attachments ({note.attachments.length})
              </CardTitle>
              <CardDescription>
                Files attached to this note
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {note.attachments.map((attachment) => (
                <Collapsible key={attachment.id} className="border border-border rounded-md bg-card shadow-sm">
                  <div className="flex items-center justify-between w-full p-3 hover:bg-muted/30 transition-colors">
                    <CollapsibleTrigger className="flex items-center gap-3 flex-1">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <div className="text-left">
                        <div className="font-medium">{attachment.originalName}</div>
                        <div className="text-sm text-muted-foreground">
                          {formatFileSize(parseInt(attachment.size))} • {attachment.type}
                        </div>
                      </div>
                    </CollapsibleTrigger>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(attachment.url, '_blank');
                        }}
                      >
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                      <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-data-[state=open]/collapsible:rotate-90" />
                    </div>
                  </div>
                  <CollapsibleContent className="px-3 pb-3">
                    {attachment.content ? (
                      <div className="mt-3 p-3 bg-muted rounded-md border border-border shadow-sm">
                        <div className="text-sm font-medium mb-2">File Content:</div>
                        <div className="text-sm text-muted-foreground whitespace-pre-wrap max-h-60 overflow-y-auto">
                          {attachment.content}
                        </div>
                      </div>
                    ) : (
                      <div className="mt-3 p-3 bg-muted/20 rounded-md border border-border text-sm text-muted-foreground">
                        No text content available for this file type.
                      </div>
                    )}
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Transcript */}
        {note.transcript && (
          <Card className="bg-background/5 backdrop-blur-[1px] border-border/10 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Transcript</CardTitle>
              <CardDescription>
                Original voice recording transcript
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none dark:prose-invert">
                <div className="whitespace-pre-wrap text-muted-foreground">
                  {note.transcript}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Metadata */}
        {note.metadata && (
          <Card className="bg-background/5 backdrop-blur-[1px] border-border/10 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {note.metadata.sentiment && (
                <div>
                  <h4 className="font-medium mb-2">Sentiment</h4>
                  <Badge variant="outline">{note.metadata.sentiment}</Badge>
                </div>
              )}
              
              {note.metadata.keyPoints && note.metadata.keyPoints.length > 0 && (
                <div>
                  <h4 className="font-medium mb-2">Key Points</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {note.metadata.keyPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        )}
        </div>
      </main>
    </div>
  );
}

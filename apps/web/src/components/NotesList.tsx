'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Search, Calendar, Tag, Filter, Trash2, CheckSquare, Square, MoreHorizontal, ChevronDown, Wrench } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';

interface Note {
  id: string;
  title: string;
  content: string;
  summary?: string;
  tags: string[];
  categories: string[];
  createdAt: string;
  updatedAt: string;
}

export function NotesList() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');
  
  // Client-side cache
  const cacheRef = useRef<Map<string, { data: Note[]; timestamp: number }>>(new Map());
  const CACHE_DURATION = 30000; // 30 seconds
  
  // Delete dialog state
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState<Note | null>(null);
  
  // Multi-select state
  const [selectedNotes, setSelectedNotes] = useState<Set<string>>(new Set());
  const [bulkActionDialogOpen, setBulkActionDialogOpen] = useState(false);
  const [bulkActionType, setBulkActionType] = useState<'delete' | 'tag' | 'category' | null>(null);
  const [bulkTagInput, setBulkTagInput] = useState('');
  const [bulkCategoryInput, setBulkCategoryInput] = useState('');

  // Initialize state from URL parameters
  useEffect(() => {
    const search = searchParams.get('search') || '';
    const category = searchParams.get('category') || 'all';
    const tag = searchParams.get('tag') || 'all';
    
    setSearchTerm(search);
    setSelectedCategory(category);
    setSelectedTag(tag);
  }, [searchParams]);

  const fetchNotes = async (showLoading = true, retryCount = 0) => {
    const maxRetries = 3;
    const retryDelay = 1000; // 1 second
    
    try {
      if (showLoading) setLoading(true);
      setError(null); // Clear any previous errors
      
      const params = new URLSearchParams();
      if (searchTerm) params.append('search', searchTerm);
      if (selectedCategory && selectedCategory !== 'all') params.append('category', selectedCategory);
      if (selectedTag && selectedTag !== 'all') params.append('tag', selectedTag);
      
      const cacheKey = params.toString();
      const now = Date.now();
      
      // Check cache first
      const cached = cacheRef.current.get(cacheKey);
      if (cached && (now - cached.timestamp) < CACHE_DURATION) {
        setNotes(cached.data);
        if (showLoading) setLoading(false);
        return;
      }

      // Build the URL with proper error handling
      const url = `/api/notes${cacheKey ? `?${cacheKey}` : ''}`;
      console.log('Fetching notes from:', url, retryCount > 0 ? `(retry ${retryCount})` : '');

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // Add timeout to prevent hanging requests
        signal: AbortSignal.timeout(10000), // 10 second timeout
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
      }
      
      // Check if response is JSON before parsing
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Server returned non-JSON response');
      }
      
      const data = await response.json();
      console.log('Successfully fetched notes:', data.length, 'items');
      setNotes(data);
      
      // Cache the result
      cacheRef.current.set(cacheKey, {
        data,
        timestamp: now
      });
    } catch (error) {
      console.error('Error fetching notes:', error);
      
      // Retry logic for network errors
      if (retryCount < maxRetries && error instanceof Error) {
        if (error.name === 'AbortError' || error.message.includes('Failed to fetch')) {
          console.log(`Retrying fetch in ${retryDelay}ms... (attempt ${retryCount + 1}/${maxRetries})`);
          setTimeout(() => {
            fetchNotes(showLoading, retryCount + 1);
          }, retryDelay * (retryCount + 1)); // Exponential backoff
          return;
        }
      }
      
      // Set empty array on error but don't crash the app
      setNotes([]);
      
      // Set error message for user feedback
      if (error instanceof Error) {
        console.error('Fetch error details:', error.message);
        setError(`Failed to load notes: ${error.message}`);
      } else {
        setError('Failed to load notes. Please try again.');
      }
    } finally {
      if (showLoading) setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchNotes(false); // Don't show loading for search/filter changes
    }, 300); // Optimized debounce time for better performance
    return () => clearTimeout(timeoutId);
  }, [searchTerm, selectedCategory, selectedTag]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleViewNote = (noteId: string) => {
    // Create return URL with current search parameters
    const currentUrl = new URL(window.location.href);
    const returnUrl = currentUrl.pathname + currentUrl.search;
    router.push(`/notes/${noteId}?return=${encodeURIComponent(returnUrl)}`);
  };

  const handleDeleteClick = (note: Note) => {
    setNoteToDelete(note);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!noteToDelete) return;

    try {
      const response = await fetch(`/api/notes/${noteToDelete.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Clear cache and refresh data
        cacheRef.current.clear();
        setDeleteDialogOpen(false);
        setNoteToDelete(null);
        
        // Remove the deleted note from the current state immediately
        setNotes(prevNotes => prevNotes.filter(note => note.id !== noteToDelete.id));
        
        // Force refresh the notes list to ensure consistency
        await fetchNotes(false); // Don't show loading since we already updated the UI
      } else {
        alert('Failed to delete note');
      }
    } catch (err) {
      console.error('Error deleting note:', err);
      alert('Failed to delete note');
    }
  };

  const updateURLParams = (newSearchTerm: string, newCategory: string, newTag: string) => {
    const params = new URLSearchParams(searchParams.toString());
    
    // Update view parameter to ensure we stay on review page
    params.set('view', 'review');
    
    if (newSearchTerm) {
      params.set('search', newSearchTerm);
    } else {
      params.delete('search');
    }
    
    if (newCategory && newCategory !== 'all') {
      params.set('category', newCategory);
    } else {
      params.delete('category');
    }
    
    if (newTag && newTag !== 'all') {
      params.set('tag', newTag);
    } else {
      params.delete('tag');
    }
    
    router.push(`/?${params.toString()}`, { scroll: false });
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    updateURLParams(value, selectedCategory, selectedTag);
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    updateURLParams(searchTerm, value, selectedTag);
  };

  const handleTagChange = (value: string) => {
    setSelectedTag(value);
    updateURLParams(searchTerm, selectedCategory, value);
  };

  const allCategories = Array.from(new Set(notes.flatMap(note => note.categories)));
  const allTags = Array.from(new Set(notes.flatMap(note => note.tags)));

  // Multi-select functions
  const handleSelectNote = (noteId: string) => {
    const newSelected = new Set(selectedNotes);
    if (newSelected.has(noteId)) {
      newSelected.delete(noteId);
    } else {
      newSelected.add(noteId);
    }
    setSelectedNotes(newSelected);
  };

  const handleSelectAll = () => {
    if (selectedNotes.size === notes.length) {
      setSelectedNotes(new Set());
    } else {
      setSelectedNotes(new Set(notes.map(note => note.id)));
    }
  };

  const handleBulkAction = (actionType: 'delete' | 'tag' | 'category') => {
    setBulkActionType(actionType);
    setBulkActionDialogOpen(true);
  };

  const handleBulkDelete = async () => {
    try {
      const deletePromises = Array.from(selectedNotes).map(noteId =>
        fetch(`/api/notes/${noteId}`, { method: 'DELETE' })
      );
      
      await Promise.all(deletePromises);
      
      // Clear cache and refresh data
      cacheRef.current.clear();
      
      // Remove the deleted notes from the current state immediately
      setNotes(prevNotes => prevNotes.filter(note => !selectedNotes.has(note.id)));
      
      setSelectedNotes(new Set());
      setBulkActionDialogOpen(false);
      
      // Force refresh the notes list to ensure consistency
      await fetchNotes(false); // Don't show loading since we already updated the UI
    } catch (error) {
      console.error('Error deleting notes:', error);
    }
  };

  const handleBulkAddTag = async () => {
    if (!bulkTagInput.trim()) return;
    
    try {
      const updatePromises = Array.from(selectedNotes).map(async (noteId) => {
        const note = notes.find(n => n.id === noteId);
        if (!note) return;
        
        const updatedTags = [...note.tags, bulkTagInput.trim()];
        
        return fetch(`/api/notes/${noteId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: note.title,
            content: note.content,
            summary: note.summary,
            tags: updatedTags,
            categories: note.categories,
          }),
        });
      });
      
      await Promise.all(updatePromises);
      
      // Clear cache and refresh data
      cacheRef.current.clear();
      setSelectedNotes(new Set());
      setBulkActionDialogOpen(false);
      setBulkTagInput('');
      
      // Force refresh the notes list
      await fetchNotes(true);
    } catch (error) {
      console.error('Error adding tags:', error);
    }
  };

  const handleBulkAddCategory = async () => {
    if (!bulkCategoryInput.trim()) return;
    
    try {
      const updatePromises = Array.from(selectedNotes).map(async (noteId) => {
        const note = notes.find(n => n.id === noteId);
        if (!note) return;
        
        const updatedCategories = [...note.categories, bulkCategoryInput.trim()];
        
        return fetch(`/api/notes/${noteId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: note.title,
            content: note.content,
            summary: note.summary,
            tags: note.tags,
            categories: updatedCategories,
          }),
        });
      });
      
      await Promise.all(updatePromises);
      
      // Clear cache and refresh data
      cacheRef.current.clear();
      setSelectedNotes(new Set());
      setBulkActionDialogOpen(false);
      setBulkCategoryInput('');
      
      // Force refresh the notes list
      await fetchNotes(true);
    } catch (error) {
      console.error('Error adding categories:', error);
    }
  };

  // Show loading only for initial load, not for search/filter changes
  const showInitialLoading = loading && notes.length === 0;
  
  // Show error state
  if (error && !loading) {
    return (
      <div className="h-full w-full p-4 overflow-visible">
        <Card className="h-full flex flex-col">
          <CardHeader className="flex-shrink-0">
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              Review Notes
            </CardTitle>
            <CardDescription>
              Search and filter through your saved notes
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col items-center justify-center space-y-4">
            <div className="text-center space-y-2">
              <div className="text-destructive text-lg font-medium">
                Unable to load notes
              </div>
              <div className="text-muted-foreground text-sm max-w-md">
                {error}
              </div>
            </div>
            <Button 
              onClick={() => fetchNotes(true)} 
              variant="outline"
              className="mt-4"
            >
              Try Again
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const SkeletonRow = () => (
    <tr className="border-t">
      <td className="p-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-3 w-64" />
        </div>
      </td>
      <td className="p-4">
        <div className="flex gap-1">
          <Skeleton className="h-5 w-12 rounded-full" />
          <Skeleton className="h-5 w-16 rounded-full" />
        </div>
      </td>
      <td className="p-4">
        <div className="flex gap-1">
          <Skeleton className="h-5 w-20 rounded-full" />
        </div>
      </td>
      <td className="p-4">
        <Skeleton className="h-3 w-24" />
      </td>
      <td className="p-4">
        <Skeleton className="h-8 w-16" />
      </td>
    </tr>
  );

  if (showInitialLoading) {
    return (
      <div className="h-full w-full p-4 overflow-visible">
        <Card className="h-full flex flex-col">
          <CardHeader className="flex-shrink-0">
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              Review Notes
            </CardTitle>
            <CardDescription>
              Search and filter through your saved notes
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col space-y-6 overflow-visible">
            {/* Search and Filters Skeleton */}
            <div className="flex flex-col md:flex-row gap-4 flex-shrink-0">
              <Skeleton className="h-10 w-48" />
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              </div>
            </div>

            {/* Table Skeleton */}
            <div className="flex-1 border rounded-lg overflow-visible flex flex-col">
              <div className="flex-1 overflow-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-4 font-medium">Title</th>
                      <th className="text-left p-4 font-medium">Tags</th>
                      <th className="text-left p-4 font-medium">Categories</th>
                      <th className="text-left p-4 font-medium">Created</th>
                      <th className="text-left p-4 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <SkeletonRow key={index} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Results Summary Skeleton */}
            <div className="text-sm text-muted-foreground flex-shrink-0">
              <Skeleton className="h-4 w-48" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="h-full w-full p-4 overflow-visible">
      <Card className="h-full flex flex-col">
        <CardHeader className="flex-shrink-0">
          <CardTitle className="flex items-center gap-2">
            <Search className="w-5 h-5" />
            Review Notes
          </CardTitle>
          <CardDescription>
            Search and filter through your saved notes
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col space-y-6 overflow-visible">
      {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 flex-shrink-0">
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="w-48 px-4 justify-between h-10"
                    disabled={selectedNotes.size === 0}
                  >
                    <span className="flex items-center gap-2">
                      <Wrench className="h-4 w-4" />
                      Actions
                      {selectedNotes.size > 0 && (
                        <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                          {selectedNotes.size}
                        </span>
                      )}
                    </span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  <DropdownMenuItem 
                    onClick={() => handleBulkAction('delete')}
                    className="text-destructive focus:text-destructive focus:bg-destructive/10"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Selected
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => handleBulkAction('tag')}
                    className="focus:bg-accent/10"
                  >
                    <Tag className="h-4 w-4 mr-2" />
                    Add Tag
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => handleBulkAction('category')}
                    className="focus:bg-accent/10"
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Add Category
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              {selectedNotes.size > 0 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedNotes(new Set())}
                  className="px-3"
                >
                  Clear
                </Button>
              )}
            </div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search notes..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 z-10" />
              <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                <SelectTrigger className="w-full pl-10">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all" className="focus:bg-accent/10">All Categories</SelectItem>
                  {allCategories.map(category => (
                    <SelectItem key={category} value={category} className="focus:bg-accent/10">
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="relative">
              <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 z-10" />
              <Select value={selectedTag} onValueChange={handleTagChange}>
                <SelectTrigger className="w-full pl-10">
                  <SelectValue placeholder="All Tags" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all" className="focus:bg-accent/10">All Tags</SelectItem>
                  {allTags.map(tag => (
                    <SelectItem key={tag} value={tag} className="focus:bg-accent/10">
                      {tag}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
      </div>
              </div>


          {/* Notes Table */}
          <div className="flex-1 border rounded-lg overflow-visible flex flex-col">
            <div className="flex-1 overflow-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-medium w-12">
                      <Checkbox
                        checked={selectedNotes.size === notes.length && notes.length > 0}
                        onCheckedChange={handleSelectAll}
                        aria-label="Select all notes"
                      />
                    </th>
                    <th className="text-left p-4 font-medium">Title</th>
                    <th className="text-left p-4 font-medium">Tags & Categories</th>
                    <th className="text-left p-4 font-medium">Created</th>
                    <th className="text-left p-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {notes.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="text-center p-8 text-muted-foreground">
                        <div className="space-y-2">
                          <div>No notes found. Start by taking some notes!</div>
                          {!loading && (
                            <Button 
                              onClick={() => fetchNotes(true)} 
                              variant="outline" 
                            >
                              Refresh
                            </Button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ) : (
                    notes.map((note) => (
                      <tr key={note.id} className="border-t/20 hover:bg-muted/10">
                        <td className="p-4 w-12">
                          <Checkbox
                            checked={selectedNotes.has(note.id)}
                            onCheckedChange={() => handleSelectNote(note.id)}
                            aria-label={`Select note: ${note.title}`}
                          />
                        </td>
                        <td className="p-4">
                          <div className="font-medium">{note.title}</div>
                          <div className="text-sm text-muted-foreground truncate max-w-xs">
                            {note.content.substring(0, 100)}...
                  </div>
                        </td>
                        <td className="p-4">
                  <div className="flex flex-wrap gap-1">
                            {/* Display tags */}
                            {note.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                              </Badge>
                    ))}
                            {/* Display categories */}
                            {note.categories.slice(0, 2).map((category) => (
                              <Badge key={category} variant="outline" className="text-xs">
                        {category}
                              </Badge>
                    ))}
                            {/* Show plus indicator if there are more tags or categories */}
                            {(note.tags.length > 2 || note.categories.length > 2) && (
                              <Badge variant="outline" className="text-xs">
                                +{(note.tags.length - 2) + (note.categories.length - 2)}
                              </Badge>
                            )}
                  </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {formatDate(note.createdAt)}
                </div>
                        </td>
                        <td className="p-4">
                          <div className="flex gap-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleViewNote(note.id)}
                            >
                              View
                            </Button>
                            <Dialog open={deleteDialogOpen && noteToDelete?.id === note.id} onOpenChange={(open) => {
                              if (!open) {
                                setDeleteDialogOpen(false);
                                setNoteToDelete(null);
                              }
                            }}>
                              <DialogTrigger asChild>
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => handleDeleteClick(note)}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-md">
                                <DialogHeader>
                                  <DialogTitle>Delete Note</DialogTitle>
                                  <DialogDescription>
                                    Are you sure you want to delete "{note.title}"? This action cannot be undone.
                                  </DialogDescription>
                                </DialogHeader>
                                <DialogFooter>
                                  <Button variant="outline" onClick={() => {
                                    setDeleteDialogOpen(false);
                                    setNoteToDelete(null);
                                  }}>
                                    Cancel
                                  </Button>
                                  <Button variant="destructive" onClick={handleDeleteConfirm}>
                                    <Trash2 className="h-4 w-4 mr-2" />
                                    Delete
                                  </Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              </div>
          </div>

          {/* Results Summary */}
          <div className="text-sm text-muted-foreground flex-shrink-0 flex items-center justify-center relative">
            <span>
              Showing {notes.length} note{notes.length !== 1 ? 's' : ''}
              {searchTerm && ` matching "${searchTerm}"`}
              {selectedCategory && selectedCategory !== 'all' && ` in category "${selectedCategory}"`}
              {selectedTag && selectedTag !== 'all' && ` with tag "${selectedTag}"`}
            </span>
            {loading && notes.length > 0 && (
              <div className="absolute right-0 flex items-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                <span className="text-xs">Updating...</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Bulk Action Dialogs */}
      <Dialog open={bulkActionDialogOpen} onOpenChange={setBulkActionDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {bulkActionType === 'delete' && 'Delete Selected Notes'}
              {bulkActionType === 'tag' && 'Add Tag to Selected Notes'}
              {bulkActionType === 'category' && 'Add Category to Selected Notes'}
            </DialogTitle>
            <DialogDescription>
              {bulkActionType === 'delete' && 
                `Are you sure you want to delete ${selectedNotes.size} note${selectedNotes.size !== 1 ? 's' : ''}? This action cannot be undone.`
              }
              {bulkActionType === 'tag' && 
                `Add a tag to ${selectedNotes.size} selected note${selectedNotes.size !== 1 ? 's' : ''}.`
              }
              {bulkActionType === 'category' && 
                `Add a category to ${selectedNotes.size} selected note${selectedNotes.size !== 1 ? 's' : ''}.`
              }
            </DialogDescription>
          </DialogHeader>
          {bulkActionType === 'tag' && (
            <div className="py-4">
              <Input
                placeholder="Enter tag name..."
                value={bulkTagInput}
                onChange={(e) => setBulkTagInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleBulkAddTag();
                  }
                }}
              />
            </div>
          )}
          {bulkActionType === 'category' && (
            <div className="py-4">
              <Input
                placeholder="Enter category name..."
                value={bulkCategoryInput}
                onChange={(e) => setBulkCategoryInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleBulkAddCategory();
                  }
                }}
              />
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setBulkActionDialogOpen(false)}>
              Cancel
            </Button>
            {bulkActionType === 'delete' && (
              <Button variant="destructive" onClick={handleBulkDelete}>
                <Trash2 className="h-4 w-4 mr-2" />
                Delete {selectedNotes.size} Note{selectedNotes.size !== 1 ? 's' : ''}
              </Button>
            )}
            {bulkActionType === 'tag' && (
              <Button 
                onClick={handleBulkAddTag}
                disabled={!bulkTagInput.trim()}
              >
                <Tag className="h-4 w-4 mr-2" />
                Add Tag
              </Button>
            )}
            {bulkActionType === 'category' && (
              <Button 
                onClick={handleBulkAddCategory}
                disabled={!bulkCategoryInput.trim()}
              >
                <Filter className="h-4 w-4 mr-2" />
                Add Category
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
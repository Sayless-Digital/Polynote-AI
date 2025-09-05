'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { NoteTaker } from '@/components/NoteTaker';
import { NotesList } from '@/components/NotesList';
import { AIChatInterface } from '@/components/AIChatInterface';
import { ThemeToggle } from '@/components/ThemeToggle';
import { AuthDialog } from '@/components/AuthDialog';
import { Button } from '@/components/ui/button';

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeView, setActiveView] = useState<'take' | 'review' | 'chat'>('take');
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);

  // Initialize activeView from URL parameters
  useEffect(() => {
    const view = searchParams.get('view') as 'take' | 'review' | 'chat';
    if (view && ['take', 'review', 'chat'].includes(view)) {
      setActiveView(view);
    }
  }, [searchParams]);

  const handleViewChange = (view: 'take' | 'review' | 'chat') => {
    setActiveView(view);
    const params = new URLSearchParams(searchParams.toString());
    params.set('view', view);
    router.push(`/?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="h-screen w-screen bg-background flex flex-col overflow-hidden">
      {/* Header */}
      <header className="border-b flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold">Polynote AI</h1>
            <div className="flex items-center space-x-4">
              <nav className="flex space-x-4">
                <Button
                  variant={activeView === 'take' ? 'default' : 'ghost'}
                  onClick={() => handleViewChange('take')}
                >
                  Take Notes
                </Button>
                <Button
                  variant={activeView === 'review' ? 'default' : 'ghost'}
                  onClick={() => handleViewChange('review')}
                >
                  Review Notes
                </Button>
                <Button
                  variant={activeView === 'chat' ? 'default' : 'ghost'}
                  onClick={() => handleViewChange('chat')}
                >
                  AI Chat
                </Button>
              </nav>
              <Button
                variant="outline"
                onClick={() => setIsAuthDialogOpen(true)}
              >
                Sign In
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        {activeView === 'take' && <NoteTaker />}
        {activeView === 'review' && <NotesList />}
        {activeView === 'chat' && <AIChatInterface />}
      </main>

      {/* Auth Dialog */}
      <AuthDialog 
        open={isAuthDialogOpen} 
        onOpenChange={setIsAuthDialogOpen} 
      />
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { NoteTaker } from '@/components/NoteTaker';
import { NotesList } from '@/components/NotesList';
import { AIChatInterface } from '@/components/AIChatInterface';
import { ThemeToggle } from '@/components/ThemeToggle';
import { AuthDialog } from '@/components/AuthDialog';
import { UserCard } from '@/components/UserCard';
import { Button } from '@/components/ui/button';
import MinimalHero from '@/components/MinimalHero';
import { useAuth } from '@/hooks/useAuth';
import { PenTool, FileText, MessageSquare } from 'lucide-react';

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { theme } = useTheme();
  const { user, isAuthenticated, isLoading, signIn, signOut } = useAuth();
  const [activeView, setActiveView] = useState<'take' | 'review' | 'chat'>('take');
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize activeView from URL parameters
  useEffect(() => {
    const view = searchParams.get('view') as 'take' | 'review' | 'chat';
    if (view && ['take', 'review', 'chat'].includes(view)) {
      setActiveView(view);
    }
  }, [searchParams]);

  // Prevent hydration mismatch by only rendering theme-dependent content after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleViewChange = (view: 'take' | 'review' | 'chat') => {
    setActiveView(view);
    const params = new URLSearchParams(searchParams.toString());
    params.set('view', view);
    router.push(`/?${params.toString()}`, { scroll: false });
  };

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="h-screen w-screen bg-background/10 backdrop-blur-[1px] flex flex-col overflow-hidden">
        {/* Header */}
        <header className="border-b/10 bg-background/5 backdrop-blur-[1px] flex-shrink-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-16">
              {/* Left side - Logo */}
              <div className="flex items-center space-x-3 flex-shrink-0">
                {mounted ? (
                  <Image
                    src={theme === 'dark' ? '/polynote logo light.svg' : '/polynote logo dark.svg'}
                    alt="PolyNote Logo"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                ) : (
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                )}
                <h1 className="text-2xl font-bold">PolyNote</h1>
              </div>
              
              {/* Center - Navigation */}
              <div className="flex-1 flex justify-center">
                <nav className="flex space-x-4">
                  <div className="h-10 w-24 bg-muted animate-pulse rounded" />
                  <div className="h-10 w-28 bg-muted animate-pulse rounded" />
                  <div className="h-10 w-20 bg-muted animate-pulse rounded" />
                </nav>
              </div>
              
              {/* Right side - User controls */}
              <div className="flex items-center space-x-4 flex-shrink-0">
                <div className="w-10 h-10 bg-muted animate-pulse rounded-full" />
                <div className="w-10 h-10 bg-muted animate-pulse rounded" />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content - Loading */}
        <main className="flex-1 overflow-hidden p-4">
          <div className="h-full w-full flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-muted animate-pulse rounded-full mx-auto" />
              <div className="space-y-2">
                <div className="h-4 w-32 bg-muted animate-pulse rounded mx-auto" />
                <div className="h-3 w-24 bg-muted animate-pulse rounded mx-auto" />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Show hero for logged out users
  if (!isAuthenticated) {
    return (
      <div className="relative">
        <MinimalHero 
          onSignInClick={() => setIsAuthDialogOpen(true)} 
          onLogInClick={() => setIsAuthDialogOpen(true)} 
        />
        {/* Auth Dialog */}
        <AuthDialog 
          open={isAuthDialogOpen} 
          onOpenChange={setIsAuthDialogOpen}
          onSignIn={signIn}
        />
      </div>
    );
  }

  return (
    <div className="h-screen w-screen bg-background/10 backdrop-blur-[1px] flex flex-col overflow-hidden">
      {/* Header */}
      <header className="border-b/10 bg-background/5 backdrop-blur-[1px] flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            {/* Left side - Logo */}
            <div className="flex items-center space-x-3 flex-shrink-0">
              {mounted ? (
                <Image
                  src={theme === 'dark' ? '/polynote logo light.svg' : '/polynote logo dark.svg'}
                  alt="PolyNote Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              ) : (
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              )}
              <h1 className="text-2xl font-bold">PolyNote</h1>
            </div>
            
            {/* Center - Navigation */}
            <div className="flex-1 flex justify-center">
              <nav className="flex space-x-4">
                <Button
                  variant={activeView === 'take' ? 'default' : 'ghost'}
                  onClick={() => handleViewChange('take')}
                  className="flex items-center gap-2"
                >
                  <PenTool className="h-4 w-4" />
                  Take Notes
                </Button>
                <Button
                  variant={activeView === 'review' ? 'default' : 'ghost'}
                  onClick={() => handleViewChange('review')}
                  className="flex items-center gap-2"
                >
                  <FileText className="h-4 w-4" />
                  Review Notes
                </Button>
                <Button
                  variant={activeView === 'chat' ? 'default' : 'ghost'}
                  onClick={() => handleViewChange('chat')}
                  className="flex items-center gap-2"
                >
                  <MessageSquare className="h-4 w-4" />
                  AI Chat
                </Button>
              </nav>
            </div>
            
            {/* Right side - User controls */}
            <div className="flex items-center space-x-4 flex-shrink-0">
              {isLoading ? (
                <div className="w-10 h-10 bg-muted animate-pulse rounded-full" />
              ) : isAuthenticated && user ? (
                <UserCard user={user} onSignOut={signOut} />
              ) : (
                <Button
                  variant="outline"
                  onClick={() => setIsAuthDialogOpen(true)}
                >
                  Sign In
                </Button>
              )}
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
        onSignIn={signIn}
      />
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { NoteTaker } from '@/components/NoteTaker';
import { NotesList } from '@/components/NotesList';
import { AIChatInterface } from '@/components/AIChatInterface';
import { AppHeader } from '@/components/AppHeader';
import { AuthDialog } from '@/components/AuthDialog';
import MinimalHero from '@/components/MinimalHero';
import { useAuth } from '@/hooks/useAuth';

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, isAuthenticated, isLoading, signIn, signOut } = useAuth();
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
      <AppHeader activeView={activeView} onViewChange={handleViewChange} />

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

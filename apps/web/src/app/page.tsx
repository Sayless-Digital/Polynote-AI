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
    <div className="h-screen w-screen bg-background flex flex-col overflow-visible">
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

      <AppHeader activeView={activeView} onViewChange={handleViewChange} />

      {/* Main Content */}
      <main className="flex-1 overflow-visible relative z-10">
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

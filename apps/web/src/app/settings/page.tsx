'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { AISettings } from '@/components/AISettings';
import { ThemeToggle } from '@/components/ThemeToggle';
import { UserCard } from '@/components/UserCard';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { PenTool, FileText, MessageSquare } from 'lucide-react';

export default function SettingsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { theme } = useTheme();
  const { user, isAuthenticated, isLoading, signOut } = useAuth();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering theme-dependent content after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleViewChange = (view: 'take' | 'review' | 'chat') => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('view', view);
    router.push(`/?${params.toString()}`);
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

  // Redirect to home if not authenticated
  if (!isAuthenticated) {
    router.push('/');
    return null;
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

      {/* Header */}
      <header className="border-b/10 bg-background/5 backdrop-blur-[1px] flex-shrink-0 relative z-10">
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
                  variant="ghost"
                  onClick={() => handleViewChange('take')}
                  className="flex items-center gap-2"
                >
                  <PenTool className="h-4 w-4" />
                  Take Notes
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => handleViewChange('review')}
                  className="flex items-center gap-2"
                >
                  <FileText className="h-4 w-4" />
                  Review Notes
                </Button>
                <Button
                  variant="ghost"
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
                  onClick={() => router.push('/')}
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
      <main className="flex-1 overflow-auto relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <AISettings />
        </div>
      </main>
    </div>
  );
}


'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { UserCard } from '@/components/UserCard';
import { useAuth } from '@/hooks/useAuth';
import { PenTool, FileText, MessageSquare } from 'lucide-react';

interface AppHeaderProps {
  activeView?: 'take' | 'review' | 'chat';
  onViewChange?: (view: 'take' | 'review' | 'chat') => void;
  showNavigation?: boolean;
}

export function AppHeader({ activeView, onViewChange, showNavigation = true }: AppHeaderProps) {
  const router = useRouter();
  const { theme } = useTheme();
  const { user, isAuthenticated, isLoading, signOut } = useAuth();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering theme-dependent content after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleViewChange = (view: 'take' | 'review' | 'chat') => {
    if (onViewChange) {
      onViewChange(view);
    } else {
      router.push(`/?view=${view}`);
    }
  };

  return (
    <header className="border-b/10 bg-background/5 backdrop-blur-[1px] flex-shrink-0 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Left side - Logo */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="relative w-12 h-12">
              {/* Light theme logo (white) - shown in dark mode */}
              <img
                src="/polynote logo light.svg"
                alt="PolyNote Logo"
                width={48}
                height={48}
                className={`absolute inset-0 transition-opacity duration-200 w-12 h-12 ${
                  theme === 'dark' ? 'opacity-100' : 'opacity-0'
                }`}
              />
              {/* Dark theme logo (black) - shown in light mode */}
              <img
                src="/polynote logo dark.svg"
                alt="PolyNote Logo"
                width={48}
                height={48}
                className={`absolute inset-0 transition-opacity duration-200 w-12 h-12 ${
                  theme === 'dark' ? 'opacity-0' : 'opacity-100'
                }`}
              />
            </div>
            <h1 className="text-2xl font-bold">PolyNote</h1>
          </div>
          
          {/* Center - Navigation */}
          {showNavigation && (
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
          )}
          
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
  );
}

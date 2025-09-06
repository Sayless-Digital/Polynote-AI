'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

interface GlobalPageLoaderProps {
  isLoading: boolean;
}

export function GlobalPageLoader({ isLoading }: GlobalPageLoaderProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isLoading) return null;

  // Prevent hydration mismatch by not rendering theme-dependent content until mounted
  if (!mounted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative w-16 h-16">
            {/* Use light logo by default to avoid black flash in dark mode */}
            <img
              src="/polynote logo light.svg"
              alt="PolyNote Logo"
              width={64}
              height={64}
              className="w-16 h-16"
            />
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <h2 className="text-2xl font-bold text-foreground">PolyNote</h2>
            <p className="text-sm text-muted-foreground animate-pulse">Loading your workspace...</p>
          </div>
          <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full animate-[loading-progress_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      {/* Animated Background - Full Screen */}
      <div className="fixed inset-0 h-full w-full overflow-hidden pointer-events-none">
        {/* Primary gradient orb */}
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full mix-blend-normal opacity-20 bg-gradient-to-br from-purple-400 via-purple-600 to-pink-400 animate-float-1" />
        
        {/* Secondary gradient orb */}
        <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full mix-blend-normal opacity-15 bg-gradient-to-br from-blue-400 via-cyan-400 to-green-400 animate-float-2" />
        
        {/* Tertiary gradient orb */}
        <div className="absolute top-1/4 right-1/3 h-64 w-64 rounded-full mix-blend-normal opacity-10 bg-gradient-to-br from-pink-400 via-yellow-400 to-red-400 animate-float-3" />
      </div>

      {/* Loader Content */}
      <div className="relative z-10 flex flex-col items-center space-y-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="relative w-16 h-16">
            {/* Light theme logo (white) - shown in dark mode */}
            <img
              src="/polynote logo light.svg"
              alt="PolyNote Logo"
              width={64}
              height={64}
              className={`absolute inset-0 transition-opacity duration-200 w-16 h-16 ${
                theme === 'dark' ? 'opacity-100' : 'opacity-0'
              }`}
            />
            {/* Dark theme logo (black) - shown in light mode */}
            <img
              src="/polynote logo dark.svg"
              alt="PolyNote Logo"
              width={64}
              height={64}
              className={`absolute inset-0 transition-opacity duration-200 w-16 h-16 ${
                theme === 'dark' ? 'opacity-0' : 'opacity-100'
              }`}
            />
          </div>
        </div>
        
        {/* Loading Animation */}
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
          </div>
          
          {/* Loading Text */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-foreground">PolyNote</h2>
            <p className="text-sm text-muted-foreground animate-pulse">Loading your workspace...</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

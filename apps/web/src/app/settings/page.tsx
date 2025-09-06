'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AISettings } from '@/components/AISettings';
import { AppHeader } from '@/components/AppHeader';
import { useAuth } from '@/hooks/useAuth';

export default function SettingsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, isAuthenticated, isLoading, signOut } = useAuth();
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  // Handle URL parameters for refreshing
  useEffect(() => {
    const refresh = searchParams.get('refresh');
    if (refresh === 'true') {
      setRefreshKey(prev => prev + 1);
      // Remove the refresh parameter from URL
      const params = new URLSearchParams(searchParams.toString());
      params.delete('refresh');
      const newUrl = params.toString() ? `?${params.toString()}` : '';
      router.replace(`/settings${newUrl}`, { scroll: false });
    }
  }, [searchParams, router]);

  const handleViewChange = (view: 'take' | 'review' | 'chat') => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('view', view);
    router.push(`/?${params.toString()}`);
  };

  const handleRefresh = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('refresh', 'true');
    router.push(`/settings?${params.toString()}`);
  };

  // Handle redirect logic
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      setShouldRedirect(true);
    }
  }, [isAuthenticated, isLoading]);

  // Perform redirect in separate effect
  useEffect(() => {
    if (shouldRedirect) {
      router.push('/');
    }
  }, [shouldRedirect, router]);

  // Show loading while checking authentication
  if (isLoading) {
    return null;
  }

  // Show nothing while redirecting (don't render anything if not authenticated)
  if (!isAuthenticated || shouldRedirect) {
    return null;
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

      <AppHeader onViewChange={handleViewChange} />

      {/* Main Content */}
      <main className="flex-1 overflow-auto relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <AISettings key={refreshKey} onRefresh={handleRefresh} />
        </div>
      </main>
    </div>
  );
}


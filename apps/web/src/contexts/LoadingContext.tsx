'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  startLoading: () => void;
  stopLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true); // Start with loading true for initial auth check
  const [loadingCount, setLoadingCount] = useState(0);

  const setLoading = (loading: boolean) => {
    if (loading) {
      setLoadingCount(prev => prev + 1);
    } else {
      setLoadingCount(prev => Math.max(0, prev - 1));
    }
  };

  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  // Update isLoading based on loadingCount
  useEffect(() => {
    setIsLoading(loadingCount > 0);
  }, [loadingCount]);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading, startLoading, stopLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useGlobalLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useGlobalLoading must be used within a LoadingProvider');
  }
  return context;
}

'use client';

import React, { useEffect } from 'react';
import { useGlobalLoading } from '@/contexts/LoadingContext';
import { GlobalPageLoader } from './GlobalPageLoader';
import { useAuth } from '@/hooks/useAuth';

export function GlobalLoadingHandler() {
  const { isLoading: globalLoading } = useGlobalLoading();
  const { isLoading: authLoading } = useAuth();

  return <GlobalPageLoader isLoading={globalLoading || authLoading} />;
}

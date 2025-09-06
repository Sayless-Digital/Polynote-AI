'use client';

import { useEffect } from 'react';
import { registerServiceWorker } from '@/lib/service-worker';

export function ServiceWorkerProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Only register service worker in production or when explicitly enabled
    if (process.env.NODE_ENV === 'production' || process.env.NEXT_PUBLIC_ENABLE_SW === 'true') {
      registerServiceWorker();
    }
  }, []);

  return <>{children}</>;
}

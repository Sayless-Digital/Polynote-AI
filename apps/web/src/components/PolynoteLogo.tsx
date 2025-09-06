'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';

interface PolynoteLogoProps {
  size?: number;
  className?: string;
}

export function PolynoteLogo({ size = 48, className = '' }: PolynoteLogoProps) {
  const { theme } = useTheme();

  // Preload both logo variants on component mount
  useEffect(() => {
    const preloadLogo = (src: string) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    };

    preloadLogo('/polynote logo light.svg');
    preloadLogo('/polynote logo dark.svg');
  }, []);

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Light theme logo */}
      <img
        src="/polynote logo light.svg"
        alt="PolyNote Logo"
        width={size}
        height={size}
        className={`absolute inset-0 transition-opacity duration-200 ${
          theme === 'dark' ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ width: size, height: size }}
      />
      {/* Dark theme logo */}
      <img
        src="/polynote logo dark.svg"
        alt="PolyNote Logo"
        width={size}
        height={size}
        className={`absolute inset-0 transition-opacity duration-200 ${
          theme === 'dark' ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ width: size, height: size }}
      />
    </div>
  );
}

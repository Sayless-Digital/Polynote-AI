'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const colors = {
  50: '#f8f7f5',
  100: '#e6e1d7',
  200: '#c8b4a0',
  300: '#a89080',
  400: '#8a7060',
  500: '#6b5545',
  600: '#544237',
  700: '#3c4237',
  800: '#2a2e26',
  900: '#1a1d18',
};

interface MinimalHeroProps {
  onSignInClick?: () => void;
  onLogInClick?: () => void;
}

export default function MinimalHero({ onSignInClick, onLogInClick }: MinimalHeroProps) {
  const gradientRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering theme-dependent content after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Animate words
    const words = document.querySelectorAll<HTMLElement>('.word');
    words.forEach((word) => {
      const delay = parseInt(word.getAttribute('data-delay') || '0', 10);
      setTimeout(() => {
        word.style.animation = 'word-appear 0.8s ease-out forwards';
      }, delay);
    });

    // Mouse gradient
    const gradient = gradientRef.current;
    function onMouseMove(e: MouseEvent) {
      if (gradient) {
        gradient.style.left = e.clientX - 192 + 'px';
        gradient.style.top = e.clientY - 192 + 'px';
        gradient.style.opacity = '1';
      }
    }
    function onMouseLeave() {
      if (gradient) gradient.style.opacity = '0';
    }
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    // Word hover effects
    words.forEach((word) => {
      word.addEventListener('mouseenter', () => {
        word.style.textShadow = '0 0 20px rgba(200, 180, 160, 0.5)';
      });
      word.addEventListener('mouseleave', () => {
        word.style.textShadow = 'none';
      });
    });

    // Click ripple effect
    function onClick(e: MouseEvent) {
      const ripple = document.createElement('div');
      ripple.style.position = 'fixed';
      ripple.style.left = e.clientX + 'px';
      ripple.style.top = e.clientY + 'px';
      ripple.style.width = '4px';
      ripple.style.height = '4px';
      ripple.style.background = 'rgba(200, 180, 160, 0.6)';
      ripple.style.borderRadius = '50%';
      ripple.style.transform = 'translate(-50%, -50%)';
      ripple.style.pointerEvents = 'none';
      ripple.style.animation = 'pulse-glow 1s ease-out forwards';
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 1000);
    }
    document.addEventListener('click', onClick);

    // Floating elements on scroll
    let scrolled = false;
    function onScroll() {
      if (!scrolled) {
        scrolled = true;
        document
          .querySelectorAll<HTMLElement>('.floating-element')
          .forEach((el, index) => {
            setTimeout(() => {
              el.style.animationPlayState = 'running';
            }, index * 200);
          });
      }
    }
    window.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('click', onClick);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="font-primary relative min-h-screen w-full overflow-hidden bg-background/10 backdrop-blur-[1px] text-foreground">
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(200,180,160,0.08)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <line
          x1="0"
          y1="20%"
          x2="100%"
          y2="20%"
          className="grid-line"
          style={{ animationDelay: '0.5s' }}
        />
        <line
          x1="0"
          y1="80%"
          x2="100%"
          y2="80%"
          className="grid-line"
          style={{ animationDelay: '1s' }}
        />
        <line
          x1="20%"
          y1="0"
          x2="20%"
          y2="100%"
          className="grid-line"
          style={{ animationDelay: '1.5s' }}
        />
        <line
          x1="80%"
          y1="0"
          x2="80%"
          y2="100%"
          className="grid-line"
          style={{ animationDelay: '2s' }}
        />
        <line
          x1="50%"
          y1="0"
          x2="50%"
          y2="100%"
          className="grid-line"
          style={{ animationDelay: '2.5s', opacity: 0.05 }}
        />
        <line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          className="grid-line"
          style={{ animationDelay: '3s', opacity: 0.05 }}
        />
        <circle
          cx="20%"
          cy="20%"
          r="2"
          className="detail-dot"
          style={{ animationDelay: '3s' }}
        />
        <circle
          cx="80%"
          cy="20%"
          r="2"
          className="detail-dot"
          style={{ animationDelay: '3.2s' }}
        />
        <circle
          cx="20%"
          cy="80%"
          r="2"
          className="detail-dot"
          style={{ animationDelay: '3.4s' }}
        />
        <circle
          cx="80%"
          cy="80%"
          r="2"
          className="detail-dot"
          style={{ animationDelay: '3.6s' }}
        />
        <circle
          cx="50%"
          cy="50%"
          r="1.5"
          className="detail-dot"
          style={{ animationDelay: '4s' }}
        />
      </svg>

      {/* Corner elements */}
      <div
        className="corner-element top-8 left-8"
        style={{ animationDelay: '4s' }}
      >
        <div
          className="absolute top-0 left-0 h-2 w-2 opacity-30"
          style={{ background: colors[200] }}
        ></div>
      </div>
      <div
        className="corner-element top-8 right-8"
        style={{ animationDelay: '4.2s' }}
      >
        <div
          className="absolute top-0 right-0 h-2 w-2 opacity-30"
          style={{ background: colors[200] }}
        ></div>
      </div>
      <div
        className="corner-element bottom-8 left-8"
        style={{ animationDelay: '4.4s' }}
      >
        <div
          className="absolute bottom-0 left-0 h-2 w-2 opacity-30"
          style={{ background: colors[200] }}
        ></div>
      </div>
      <div
        className="corner-element right-8 bottom-8"
        style={{ animationDelay: '4.6s' }}
      >
        <div
          className="absolute right-0 bottom-0 h-2 w-2 opacity-30"
          style={{ background: colors[200] }}
        ></div>
      </div>

      {/* Floating elements */}
      <div
        className="floating-element"
        style={{ top: '25%', left: '15%', animationDelay: '5s' }}
      ></div>
      <div
        className="floating-element"
        style={{ top: '60%', left: '85%', animationDelay: '5.5s' }}
      ></div>
      <div
        className="floating-element"
        style={{ top: '40%', left: '10%', animationDelay: '6s' }}
      ></div>
      <div
        className="floating-element"
        style={{ top: '75%', left: '90%', animationDelay: '6.5s' }}
      ></div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-8 py-12 md:px-16 md:py-20">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-3 -ml-4 mb-6">
          {mounted ? (
            <Image
              src={theme === 'dark' ? '/polynote logo light.svg' : '/polynote logo dark.svg'}
              alt="PolyNote Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />
          ) : (
            <div className="w-12 h-12 bg-muted animate-pulse rounded" />
          )}
          <h1 className="text-2xl font-bold text-foreground">PolyNote</h1>
        </div>

        {/* Main headline */}
        <div className="mx-auto max-w-4xl text-center">
          <h1
            className="text-decoration text-2xl leading-tight font-extralight tracking-tight md:text-4xl lg:text-5xl text-foreground"
          >
            <div className="mb-4">
              <span className="word" data-delay="600">
                Capture,
              </span>
              <span className="word" data-delay="800">
                organize,
              </span>
              <span className="word" data-delay="1000">
                and
              </span>
              <span className="word" data-delay="1200">
                discover
              </span>
              <span className="word" data-delay="1400">
                your
              </span>
              <span className="word" data-delay="1600">
                thoughts.
              </span>
            </div>
            <div
              className="text-lg leading-relaxed font-thin md:text-xl lg:text-2xl text-muted-foreground"
            >
              <span className="word" data-delay="1800">
                AI-powered
              </span>
              <span className="word" data-delay="2000">
                insights
              </span>
              <span className="word" data-delay="2200">
                and
              </span>
              <span className="word" data-delay="2400">
                intelligent
              </span>
              <span className="word" data-delay="2600">
                search.
              </span>
            </div>
          </h1>
          <div
            className="absolute top-1/2 -left-8 h-px w-4 opacity-20 bg-muted-foreground"
            style={{
              animation: 'word-appear 1s ease-out forwards',
              animationDelay: '2.8s',
            }}
          ></div>
          <div
            className="absolute top-1/2 -right-8 h-px w-4 opacity-20 bg-muted-foreground"
            style={{
              animation: 'word-appear 1s ease-out forwards',
              animationDelay: '3.0s',
            }}
          ></div>
        </div>

        {/* Action Buttons */}
        <div className="text-center mt-8">
          <div
            className="opacity-0 flex flex-col sm:flex-row gap-4 items-center justify-center"
            style={{
              animation: 'word-appear 1s ease-out forwards',
              animationDelay: '2.8s',
            }}
          >
            {/* Log In Button */}
            {onLogInClick && (
              <button
                onClick={onLogInClick}
                className="hero-button group relative px-6 py-3 text-sm font-medium tracking-wide uppercase bg-transparent border border-muted-foreground/30 text-muted-foreground hover:bg-muted-foreground/10 hover:border-muted-foreground/50 hover:text-foreground transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-lg hover:shadow-muted-foreground/20 backdrop-blur-sm rounded-lg overflow-hidden w-36"
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                
                {/* Button content */}
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Log In</span>
                  <svg 
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                </span>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-muted-foreground/0 via-muted-foreground/5 to-muted-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              </button>
            )}

            {/* Get Started Button */}
            {onSignInClick && (
              <button
                onClick={onSignInClick}
                className="hero-button group relative px-6 py-3 text-sm font-medium tracking-wide uppercase bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 border border-primary/30 text-primary hover:from-primary/20 hover:via-primary/30 hover:to-primary/20 hover:border-primary/50 transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-lg hover:shadow-primary/20 backdrop-blur-sm rounded-lg overflow-hidden"
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                
                {/* Button content */}
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <svg 
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              </button>
            )}
          </div>
        </div>
      </div>

      <div
        id="mouse-gradient"
        ref={gradientRef}
        className="pointer-events-none fixed h-96 w-96 rounded-full opacity-0 blur-3xl transition-all duration-500 ease-out"
        style={{
          background: `radial-gradient(circle, ${colors[500]}0D 0%, transparent 100%)`,
        }}
      ></div>
    </div>
  );
}

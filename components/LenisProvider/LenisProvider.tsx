'use client';

import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';

interface LenisProviderProps {
  children: React.ReactNode;
}

export function LenisProvider({ children }: LenisProviderProps) {
  React.useEffect(() => {
    // Automatically trigger a resize to recalculate document height on mount/content updates
    const resizeHandler = () => {
      window.dispatchEvent(new Event('resize'));
    };

    // Observe body height changes and notify window resize so Lenis recalculates bounds
    const observer = new ResizeObserver(() => {
      resizeHandler();
    });

    if (document.body) {
      observer.observe(document.body);
    }

    // Secondary fallback to make sure height is correct shortly after mounting
    const timer = setTimeout(resizeHandler, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth ease-out spring
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 2.0,
        touchMultiplier: 1.5,
      }}
    >
      {/* @ts-expect-error React 18/19 peer type mismatch */}
      {children}
    </ReactLenis>
  );
}

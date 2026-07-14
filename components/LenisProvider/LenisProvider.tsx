'use client';

import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';

interface LenisProviderProps {
  children: React.ReactNode;
}

export function LenisProvider({ children }: LenisProviderProps) {
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

'use client';

import { HTMLAttributes, ReactNode } from 'react';

interface HeroSectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  fullHeight?: boolean;
  gradient?: boolean;
}

export function HeroSection({ 
  className = '', 
  children,
  fullHeight = true,
  gradient = true,
  ...props 
}: HeroSectionProps) {
  const heightClass = fullHeight ? 'min-h-screen flex items-center justify-center' : '';
  const gradientClass = gradient ? 'hero-gradient' : '';
  
  return (
    <section 
      className={`relative ${heightClass} ${gradientClass} ${className}`} 
      {...props}
    >
      {children}
    </section>
  );
}
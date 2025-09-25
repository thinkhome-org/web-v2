'use client';

import { HTMLAttributes } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface AnimatedSectionProps extends HTMLAttributes<HTMLElement> {
  animation?: 'fade-in' | 'slide-up' | 'slide-in-left' | 'slide-in-right' | 'scale-in';
  delay?: number;
  separator?: boolean;
}

export function AnimatedSection({ 
  className = '', 
  animation = 'slide-up',
  delay = 0,
  separator = true,
  children,
  ...props 
}: AnimatedSectionProps) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  const separatorClass = separator ? 'border-b border-white/5' : '';
  const animationClass = isVisible ? animation : '';
  const delayClass = delay > 0 ? `stagger-${Math.min(delay, 6)}` : '';
  
  return (
    <section 
      ref={ref}
      className={`${separatorClass} ${animationClass} ${delayClass} ${className}`} 
      {...props}
    >
      {children}
    </section>
  );
}
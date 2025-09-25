import { HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  separator?: boolean;
}

export function Section({ className = '', separator = true, ...props }: SectionProps) {
  const separatorClass = separator ? 'border-b border-white/10' : '';
  return <section className={`${separatorClass} ${className}`} {...props} />;
}



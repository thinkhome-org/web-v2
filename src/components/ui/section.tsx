import { HTMLAttributes } from 'react';

export function Section({ className = '', ...props }: HTMLAttributes<HTMLElement>) {
  return <section className={`border-b border-white/10 blurred-bg ${className}`} {...props} />;
}



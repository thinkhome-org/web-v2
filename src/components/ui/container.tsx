import { HTMLAttributes } from 'react';

export function Container({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`container ${className}`} {...props} />;
}



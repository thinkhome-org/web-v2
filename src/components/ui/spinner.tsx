import { HTMLAttributes } from 'react';

export function Spinner({ className = '', ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={`inline-block h-4 w-4 rounded-full border-2 border-white/50 border-t-transparent align-middle spin ${className}`}
      aria-hidden="true"
      {...props}
    />
  );
}



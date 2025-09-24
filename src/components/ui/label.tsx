import { LabelHTMLAttributes } from 'react';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export function Label({ className = '', ...props }: LabelProps) {
  return (
    <label
      className={`text-sm font-medium text-white/90 ${className}`}
      {...props}
    />
  );
}
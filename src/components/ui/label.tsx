import { LabelHTMLAttributes, forwardRef } from 'react';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export const Label = forwardRef<HTMLLabelElement, LabelProps>(function Label({ className = '', ...props }, ref) {
  return <label ref={ref} className={`text-sm text-white/80 ${className}`} {...props} />;
});



import { ButtonHTMLAttributes, forwardRef } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md';
};

const base = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-ring disabled:opacity-60 disabled:cursor-not-allowed';
const variants: Record<string, string> = {
  primary: 'bg-accent text-white hover:bg-[#a50f19]',
  secondary: 'border border-white/15 hover:bg-white/5',
  ghost: 'hover:bg-white/5',
};
const sizes: Record<string, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className = '', variant = 'primary', size = 'md', ...props },
  ref,
) {
  return (
    <button ref={ref} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props} />
  );
});



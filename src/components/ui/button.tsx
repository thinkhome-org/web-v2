import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';

/**
 * Accessible button component with variants and loading state.
 */
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md';
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
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
  { className = '', variant = 'primary', size = 'md', loading = false, disabled, children, leftIcon, rightIcon, ...props },
  ref,
) {
  return (
    <button ref={ref} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} disabled={disabled || loading} {...props}>
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
});



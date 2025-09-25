import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'highlight';
  animate?: boolean;
}

export function Card({ className = '', variant = 'glass', animate = true, ...props }: CardProps) {
  const baseClasses = 'rounded-2xl transition-all duration-300';
  const animateClasses = animate ? 'slide-up' : '';
  
  const variantClasses = {
    default: 'border border-white/10 bg-black/20 backdrop-blur-sm',
    glass: 'glass-block',
    highlight: 'glass-block border-accent/20 bg-accent/5'
  };
  
  return (
    <div 
      className={`${baseClasses} ${variantClasses[variant]} ${animateClasses} ${className}`} 
      {...props} 
    />
  );
}

export function CardHeader({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`p-8 pb-4 ${className}`} {...props} />;
}

export function CardContent({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`p-8 pt-4 ${className}`} {...props} />;
}



"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  containerClassName?: string;
  as?: React.ElementType;
}

export function GradientButton({
  children,
  className,
  containerClassName,
  as: Component = "button",
  ...props
}: GradientButtonProps) {
  return (
    <Component
      className={cn(
        "relative group/btn flex items-center justify-center px-4 w-full h-10 rounded-sm font-medium overflow-hidden bg-zinc-900 transition-colors duration-300",
        containerClassName,
      )}
      {...props}
    >
      {/* gradient fill that fades in on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent to-red-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />

      {/* text stays above the gradient */}
      <span
        className={cn(
          "relative z-10 text-neutral-300 text-sm transition-colors duration-300 group-hover/btn:text-white",
          className,
        )}
      >
        {children}
      </span>

      <BottomGradient />
    </Component>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

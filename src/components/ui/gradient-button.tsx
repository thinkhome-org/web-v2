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
        "relative group/btn flex space-x-2 items-center justify-start px-4 w-full rounded-sm h-10 font-medium bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]",
        containerClassName,
      )}
      {...props}
    >
      <div className="absolute inset-0 rounded-sm bg-gradient-to-r from-accent to-red-400 opacity-0 group-hover/btn:opacity-100 blur transition duration-500" />
      <div className="absolute inset-0 rounded-sm bg-gradient-to-r from-accent to-red-400 opacity-0 group-hover/btn:opacity-100 transition duration-500" />
      <span
        className={cn(
          "text-neutral-300 text-sm relative z-10 transition-colors group-hover/btn:text-white duration-200",
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

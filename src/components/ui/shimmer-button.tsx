"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  children: React.ReactNode;
}

export function ShimmerButton({
  shimmerColor = "#ffffff",
  shimmerSize = "0.05em",
  borderRadius = "100px",
  shimmerDuration = "3s",
  background = "rgba(0, 0, 0, 1)",
  className,
  children,
  ...props
}: ShimmerButtonProps) {
  return (
    <motion.button
      style={
        {
          "--spread": "90deg",
          "--shimmer-color": shimmerColor,
          "--radius": borderRadius,
          "--speed": shimmerDuration,
          "--cut": shimmerSize,
          "--bg": background,
        } as React.CSSProperties
      }
      className={cn(
        "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(120,119,198,0.3)]",
        "before:absolute before:inset-0 before:overflow-hidden before:rounded-[inherit] before:border before:border-white/20 before:bg-[linear-gradient(var(--spread),transparent_20%,var(--shimmer-color)_50%,transparent_80%)] before:p-[var(--cut)] before:opacity-0 before:transition-opacity before:duration-500 before:[background-size:250%_250%,100%_100%] before:[background-position:200%_50%,0_0] group-hover:before:opacity-30",
        "after:absolute after:inset-[var(--cut)] after:rounded-[calc(var(--radius)-var(--cut))] after:[background:var(--bg)]",
        className,
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

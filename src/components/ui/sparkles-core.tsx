"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SparklesCoreProps {
  id?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
}

export function SparklesCore({
  minSize = 0.4,
  maxSize = 1,
  particleDensity = 120,
  className,
  particleColor = "#FFF",
}: SparklesCoreProps) {
  const generateSparkles = useMemo(() => {
    const sparkles = [];
    for (let i = 0; i < particleDensity; i++) {
      const size = Math.random() * (maxSize - minSize) + minSize;
      sparkles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      });
    }
    return sparkles;
  }, [particleDensity, minSize, maxSize]);

  return (
    <div className={cn("relative", className)}>
      {generateSparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute rounded-full"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            backgroundColor: particleColor,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

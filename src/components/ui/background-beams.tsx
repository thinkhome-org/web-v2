"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface BackgroundBeamsProps {
  className?: string;
}

export function BackgroundBeams({ className }: BackgroundBeamsProps) {
  const paths = [
    "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
    "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
    "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
    "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
    "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
  ];

  return (
    <div className={cn("absolute inset-0 flex items-center justify-center", className)}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 696 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full"
      >
        <g clipPath="url(#clip0_1065_8)">
          {paths.map((path, index) => (
            <motion.path
              key={index}
              d={path}
              stroke={`url(#paint${index}_linear)`}
              strokeOpacity="0.05"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                delay: index * 0.5,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 2,
              }}
            />
          ))}
        </g>
        <defs>
          {paths.map((_, index) => (
            <linearGradient
              key={index}
              id={`paint${index}_linear`}
              x1="45.5"
              y1="308.5"
              x2="616.5"
              y2="308.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#18CCFC" stopOpacity="0" />
              <stop offset="0.325" stopColor="#18CCFC" />
              <stop offset="1" stopColor="#6344F5" stopOpacity="0" />
            </linearGradient>
          ))}
          <clipPath id="clip0_1065_8">
            <rect width="696" height="316" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

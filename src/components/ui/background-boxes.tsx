"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute left-1/4 p-4 -top-1/4 flex -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 select-none",
        className
      )}
      {...rest}
    >
      <div className="grid grid-cols-[repeat(50,4rem)] grid-rows-[repeat(50,2rem)] [&>div]:border-l [&>div]:border-slate-700">
        {Array.from({ length: 2500 }).map((_, i) => (
          <div
            key={i}
            className="border-r border-t border-slate-700 relative transition-colors duration-500 hover:bg-slate-800/30 md:hover:bg-sky-300/20"
          >
            {i % 4 === 0 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-700 stroke-[1px] pointer-events-none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
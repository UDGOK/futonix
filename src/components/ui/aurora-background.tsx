"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import styles from "./aurora-background.module.css";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main className={cn(styles.wrapper, className)} {...props}>
      <div className={styles.container}>
        <div
          className={cn(
            styles.aurora,
            showRadialGradient && styles.radialMask
          )}
        />
      </div>
      {children}
    </main>
  );
};
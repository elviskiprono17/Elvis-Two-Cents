"use client";

import React from "react";
import { FlagBadge } from "./FlagBadge";
import { ThemeToggle } from "./ThemeToggle";

export const Header: React.FC = () => {
  return (
    <header className="relative w-full py-5 sm:py-6 px-4 sm:px-6 md:px-8 border-b border-line/60 bg-background transition-colors duration-200">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Left: Location Flag */}
        <div className="flex-1 flex items-center justify-start">
          <FlagBadge />
        </div>

        {/* Center: Brand Title */}
        <div className="flex-shrink-0 text-center px-2">
          <h1 className="inline-block text-foreground uppercase font-anton font-normal text-[22px] sm:text-[28px] md:text-[34px] tracking-[3px] sm:tracking-[5px] leading-tight pb-1 sm:pb-1.5 border-b-[2.5px] sm:border-b-[3px] border-foreground select-none">
            Elvis Two Cents
          </h1>
        </div>

        {/* Right: Theme Toggle */}
        <div className="flex-1 flex items-center justify-end">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    try {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const activeDark = savedTheme === "dark" || (!savedTheme && prefersDark);
      if (activeDark) {
        document.documentElement.setAttribute("data-theme", "dark");
        document.documentElement.classList.add("dark");
        setIsDark(true);
      } else {
        document.documentElement.removeAttribute("data-theme");
        document.documentElement.classList.remove("dark");
        setIsDark(false);
      }
    } catch {}
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.setAttribute("data-theme", "dark");
      document.documentElement.classList.add("dark");
      try {
        localStorage.setItem("theme", "dark");
      } catch {}
    } else {
      document.documentElement.removeAttribute("data-theme");
      document.documentElement.classList.remove("dark");
      try {
        localStorage.setItem("theme", "light");
      } catch {}
    }
  };

  if (!mounted) {
    return (
      <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center opacity-0" />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-foreground hover:text-brandBlue transition-colors duration-200 border border-transparent hover:border-line focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue"
    >
      {isDark ? (
        <Sun className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8] text-amber-400 animate-in fade-in zoom-in duration-200" />
      ) : (
        <Moon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8] text-foreground transition-transform duration-200" />
      )}
    </button>
  );
};

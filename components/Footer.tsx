import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full text-center py-10 sm:py-14 px-4 text-mute text-xs sm:text-[13px] border-t border-line/70 bg-background transition-colors duration-200">
      <div className="max-w-4xl mx-auto space-y-1">
        <p className="font-semibold tracking-wider uppercase text-foreground">
          © 2026 ELVIS TWO CENTS
        </p>
        <p className="text-mute font-normal">All Rights Reserved.</p>
      </div>
    </footer>
  );
};

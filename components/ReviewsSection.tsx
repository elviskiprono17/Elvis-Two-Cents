"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { SITE_CONFIG } from "@/config/site";

export const ReviewsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

  const checkScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4);
  }, []);

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [checkScroll]);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const item = scrollRef.current.querySelector<HTMLElement>(".review-card");
    const step = item ? item.offsetWidth + 20 : 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  return (
    <section id="reviews" className="w-full py-12 sm:py-16 px-4 sm:px-6 bg-alt border-y border-line/60">
      <div className="max-w-[980px] mx-auto">
        <h2 className="text-[12px] sm:text-[13px] uppercase tracking-[2px] text-mute font-semibold mb-5 sm:mb-6">
          What callers say
        </h2>

        {/* Carousel Wrapper */}
        <div className="relative px-8 sm:px-12 md:px-14">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
            aria-label="Previous reviews"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full border-[1.5px] border-foreground bg-background text-foreground flex items-center justify-center text-base sm:text-lg transition-all duration-150 hover:bg-foreground hover:text-background disabled:opacity-30 disabled:hover:bg-background disabled:hover:text-foreground disabled:cursor-default z-10"
          >
            ←
          </button>

          {/* Reviews Container */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="reviews flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar py-2"
          >
            {SITE_CONFIG.reviews.map((rev, idx) => (
              <div
                key={idx}
                className="review-card flex-none w-full sm:w-[calc((100%-20px)/2)] md:w-[calc((100%-40px)/3)] snap-start border-t-2 border-foreground pt-3.5 text-left transition-colors"
              >
                {/* Gold Stars */}
                <div className="text-[#f5a623] tracking-[2px] text-sm sm:text-base mb-1 select-none">
                  {"★".repeat(rev.stars)}
                  {"☆".repeat(5 - rev.stars)}
                </div>

                {/* Review Text */}
                <p className="my-2 text-[14px] sm:text-[15px] text-foreground leading-relaxed font-normal">
                  {rev.quote}
                </p>

                {/* Author Info */}
                <small className="block text-xs sm:text-[13px] text-mute font-medium">
                  — {rev.author}, {rev.location}
                </small>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight}
            aria-label="Next reviews"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full border-[1.5px] border-foreground bg-background text-foreground flex items-center justify-center text-base sm:text-lg transition-all duration-150 hover:bg-foreground hover:text-background disabled:opacity-30 disabled:hover:bg-background disabled:hover:text-foreground disabled:cursor-default z-10"
          >
            →
          </button>
        </div>

        {/* Trustpilot Review Badge */}
        <a
          id="tp"
          href={SITE_CONFIG.trustpilotUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-2 mt-8 sm:mt-10 text-foreground text-center select-none"
          aria-label="Rated Excellent on Trustpilot"
        >
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <strong className="text-lg sm:text-xl font-bold tracking-tight">Excellent</strong>
            <div className="flex gap-0.5 sm:gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <span
                  key={i}
                  className="w-5 h-5 sm:w-6 sm:h-6 bg-[#00b67a] flex items-center justify-center p-0.5"
                >
                  <svg viewBox="0 0 24 24" className="w-full h-full fill-white">
                    <polygon points="12,3.2 14.6,9 21,9.6 16.2,13.8 17.6,20 12,16.8 6.4,20 7.8,13.8 3,9.6 9.4,9" />
                  </svg>
                </span>
              ))}
            </div>
          </div>
          <div className="text-xs sm:text-sm text-mute">
            <b className="text-foreground font-semibold">TrustScore 4.9</b> out of 5 &middot; Based on 128 reviews
          </div>
          <div className="flex items-center gap-1.5 font-extrabold text-lg sm:text-xl tracking-[-0.3px] group-hover:text-[#00b67a] transition-colors">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#00b67a]">
              <polygon points="12,1.5 14.9,8.4 22.4,9 16.7,13.9 18.5,21.2 12,17.3 5.5,21.2 7.3,13.9 1.6,9 9.1,8.4" />
            </svg>
            Trustpilot
          </div>
        </a>
      </div>
    </section>
  );
};

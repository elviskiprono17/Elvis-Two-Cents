"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/config/site";

export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const videoUrl = SITE_CONFIG.videoUrl;

  const isDirectVideo = videoUrl && (videoUrl.endsWith(".mp4") || videoUrl.endsWith(".webm"));

  return (
    <section id="video" className="w-full py-8 sm:py-12 px-4 sm:px-6 bg-background">
      <div className="max-w-[620px] mx-auto flex flex-col items-center">
        {/* TikTok Pill Button */}
        <div className="mb-7 sm:mb-8">
          <a
            href={SITE_CONFIG.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 sm:gap-3.5 bg-background text-foreground border-[1.5px] border-foreground rounded-full py-1.5 sm:py-2 pl-2 pr-5 sm:pr-6 shadow-[4px_4px_0_#25f4ee,-4px_-4px_0_#fe2c55] hover:shadow-[6px_6px_0_#25f4ee,-6px_-6px_0_#fe2c55] hover:-translate-y-0.5 transition-all duration-150 select-none"
            aria-label={`Follow Elvis on TikTok ${SITE_CONFIG.tiktokHandle}`}
          >
            {/* TikTok Icon Bubble */}
            <span className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-foreground flex items-center justify-center flex-shrink-0 transition-transform duration-150 group-hover:scale-105">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 sm:w-[22px] sm:h-[22px] fill-background filter drop-shadow-[1.5px_1.5px_0_#fe2c55] drop-shadow-[-1.5px_-1.5px_0_#25f4ee]"
                aria-hidden="true"
              >
                <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
              </svg>
            </span>
            <span className="text-left leading-tight">
              <small className="block text-[10px] sm:text-[11px] uppercase tracking-[1.5px] sm:tracking-[2px] text-mute font-medium">
                Follow on TikTok
              </small>
              <strong className="block text-[15px] sm:text-[18px] tracking-[-0.3px] font-bold text-foreground">
                {SITE_CONFIG.tiktokHandle}
              </strong>
            </span>
          </a>
        </div>

        {/* Video Card Container */}
        <div className="w-full relative aspect-video bg-panelBg rounded-2xl border border-line shadow-sm overflow-hidden flex flex-col items-center justify-center text-center p-4 transition-all duration-200">
          {videoUrl && isPlaying ? (
            isDirectVideo ? (
              <video
                src={videoUrl}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-cover rounded-2xl"
              />
            ) : (
              <iframe
                src={videoUrl}
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="w-full h-full border-0 rounded-2xl"
              />
            )
          ) : (
            <div
              onClick={() => videoUrl && setIsPlaying(true)}
              className={`w-full h-full flex flex-col items-center justify-center ${
                videoUrl ? "cursor-pointer group" : ""
              }`}
            >
              {/* Play Button */}
              <div className="relative mb-3 sm:mb-4">
                <div className="w-14 h-14 sm:w-[68px] sm:h-[68px] rounded-full bg-[#111111] dark:bg-[#2a2a2f] border-2 border-transparent dark:border-[#555] flex items-center justify-center transition-all duration-200 group-hover:scale-105 shadow-md">
                  <div className="w-0 h-0 ml-1 border-t-[9px] sm:border-t-[12px] border-t-transparent border-b-[9px] sm:border-b-[12px] border-b-transparent border-l-[15px] sm:border-l-[20px] border-l-white" />
                </div>
              </div>

              {/* Video Text */}
              <div className="px-4 text-center">
                <strong className="block text-[15px] sm:text-[17px] text-foreground font-semibold mb-1">
                  Watch This Before You Book A Session
                </strong>
                <p className="text-xs sm:text-[14px] text-mute font-normal">
                  [ Face-To-Camera Perspective Video Embed ]
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

"use client";

import React, { useState } from "react";

interface CityPin {
  id: string;
  name: string;
  country: string;
  flag: string;
  x: number; // 0 to 1000 coordinate scale
  y: number; // 0 to 500 coordinate scale
  recentSession: string;
}

const GLOBAL_PINS: CityPin[] = [
  { id: "nairobi", name: "Nairobi", country: "Kenya", flag: "🇰🇪", x: 585, y: 285, recentSession: "Direct Voice Blitz" },
  { id: "london", name: "London", country: "United Kingdom", flag: "🇬🇧", x: 485, y: 145, recentSession: "Strategy Blitz" },
  { id: "newyork", name: "New York", country: "United States", flag: "🇺🇸", x: 285, y: 175, recentSession: "Tactical Execution" },
  { id: "toronto", name: "Toronto", country: "Canada", flag: "🇨🇦", x: 265, y: 155, recentSession: "Career Crossroads" },
  { id: "losangeles", name: "Los Angeles", country: "United States", flag: "🇺🇸", x: 175, y: 195, recentSession: "Voice Strategy Blitz" },
  { id: "saopaulo", name: "São Paulo", country: "Brazil", flag: "🇧🇷", x: 360, y: 365, recentSession: "Strategic Direction" },
  { id: "lagos", name: "Lagos", country: "Nigeria", flag: "🇳🇬", x: 495, y: 265, recentSession: "Zero Fluff Clarity" },
  { id: "capetown", name: "Cape Town", country: "South Africa", flag: "🇿🇦", x: 535, y: 405, recentSession: "Decision Roadmap" },
  { id: "dubai", name: "Dubai", country: "UAE", flag: "🇦🇪", x: 635, y: 220, recentSession: "High-Stakes Advisory" },
  { id: "mumbai", name: "Mumbai", country: "India", flag: "🇮🇳", x: 690, y: 235, recentSession: "Actionable Strategy" },
  { id: "singapore", name: "Singapore", country: "Singapore", flag: "🇸🇬", x: 775, y: 295, recentSession: "Clarity Session" },
  { id: "tokyo", name: "Tokyo", country: "Japan", flag: "🇯🇵", x: 865, y: 185, recentSession: "Direct Perspective" },
  { id: "sydney", name: "Sydney", country: "Australia", flag: "🇦🇺", x: 895, y: 395, recentSession: "Voice Strategy Blitz" },
  { id: "paris", name: "Paris", country: "France", flag: "🇫🇷", x: 500, y: 160, recentSession: "Tactical Guidance" },
  { id: "berlin", name: "Berlin", country: "Germany", flag: "🇩🇪", x: 525, y: 145, recentSession: "Unfiltered Feedback" },
  { id: "cairo", name: "Cairo", country: "Egypt", flag: "🇪🇬", x: 565, y: 215, recentSession: "Direct Voice Blitz" },
];

export const WorldMap: React.FC = () => {
  const [activePin, setActivePin] = useState<CityPin | null>(null);

  return (
    <section id="map" className="w-full py-12 sm:py-16 px-4 sm:px-6 bg-background">
      <div className="max-w-[980px] mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-[12px] sm:text-[13px] uppercase tracking-[2px] text-mute font-semibold mb-2">
          Trusted by people from +110 countries
        </h2>
        <p className="text-sm text-mute max-w-lg mx-auto mb-6">
          Direct 1-on-1 strategy sessions delivered worldwide over low-latency browser phone audio.
        </p>

        {/* Map Container */}
        <div className="relative w-full rounded-2xl border border-line bg-cardBg/50 dark:bg-cardBg/40 backdrop-blur-sm p-3 sm:p-6 overflow-hidden shadow-sm">
          {/* Subtle Grid and Background Effects */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

          {/* SVG Map */}
          <div className="relative w-full aspect-[2/1] select-none">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full block"
              aria-label="Interactive world map showing global callers"
            >
              <defs>
                {/* Radial glow around pins */}
                <radialGradient id="pulseGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="var(--blue)" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="var(--blue)" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Equator & Latitude Guideline Reference Lines */}
              <line x1="40" y1="250" x2="960" y2="250" stroke="var(--line2)" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.3" />
              <line x1="40" y1="160" x2="960" y2="160" stroke="var(--line2)" strokeWidth="0.6" strokeDasharray="2 4" opacity="0.2" />
              <line x1="40" y1="340" x2="960" y2="340" stroke="var(--line2)" strokeWidth="0.6" strokeDasharray="2 4" opacity="0.2" />

              {/* Accurate Stylized Continental Silhouettes */}
              <g className="fill-land transition-colors duration-300">
                {/* North America */}
                <path d="M120,80 Q160,60 220,65 Q270,70 300,100 Q320,130 310,165 Q290,185 270,210 Q250,230 240,260 Q225,275 210,250 Q190,240 180,210 Q150,215 130,175 Q110,140 120,80 Z" />
                {/* Greenland */}
                <path d="M330,50 Q365,40 395,55 Q405,80 375,95 Q340,90 330,50 Z" />
                {/* South America */}
                <path d="M260,270 Q305,270 345,300 Q385,340 370,390 Q340,450 310,480 Q290,440 280,390 Q270,340 250,300 Q250,280 260,270 Z" />
                {/* Europe */}
                <path d="M460,110 Q500,90 545,100 Q565,130 550,165 Q520,185 490,180 Q470,165 460,140 Z" />
                {/* British Isles */}
                <path d="M465,120 Q485,115 480,145 Q465,150 465,120 Z" />
                {/* Africa */}
                <path d="M460,195 Q535,190 575,225 Q605,275 585,345 Q555,420 525,435 Q500,410 490,340 Q465,300 450,260 Q445,220 460,195 Z" />
                {/* Madagascar */}
                <path d="M605,350 Q615,350 610,380 Q600,380 605,350 Z" />
                {/* Asia (including Middle East, India, China, Siberia) */}
                <path d="M570,105 Q660,80 770,85 Q860,100 890,140 Q880,190 840,220 Q780,240 760,290 Q725,285 700,270 Q670,260 670,225 Q630,220 600,205 Q585,160 570,105 Z" />
                {/* Japan */}
                <path d="M865,155 Q880,170 870,200 Q855,185 865,155 Z" />
                {/* Southeast Asia & Indonesia */}
                <path d="M740,280 Q780,275 790,305 Q760,335 730,315 Z" />
                <path d="M765,320 Q810,320 830,340 Q795,350 765,320 Z" />
                {/* Australia */}
                <path d="M800,345 Q865,335 910,365 Q925,415 885,445 Q830,445 810,410 Q790,375 800,345 Z" />
                {/* New Zealand */}
                <path d="M940,425 Q955,425 945,465 Q930,455 940,425 Z" />
              </g>

              {/* Pins and Pulsing Radar Rings */}
              {GLOBAL_PINS.map((pin, index) => {
                const isHovered = activePin?.id === pin.id;
                return (
                  <g
                    key={pin.id}
                    className="cursor-pointer group"
                    onMouseEnter={() => setActivePin(pin)}
                    onMouseLeave={() => setActivePin(null)}
                    onClick={() => setActivePin(isHovered ? null : pin)}
                  >
                    {/* Animated radar pulse wave */}
                    <circle
                      cx={pin.x}
                      cy={pin.y}
                      r="4"
                      className="fill-brandBlue opacity-60 animate-radar"
                      style={{ animationDelay: `${(index % 5) * 0.45}s` }}
                    />

                    {/* Outer glow ring on hover */}
                    <circle
                      cx={pin.x}
                      cy={pin.y}
                      r={isHovered ? "9" : "6"}
                      className="fill-brandBlue/30 transition-all duration-200"
                    />

                    {/* Central solid pin dot */}
                    <circle
                      cx={pin.x}
                      cy={pin.y}
                      r={isHovered ? "4" : "3"}
                      className="fill-brandBlue stroke-background stroke-[1.5] transition-all duration-150"
                    />

                    {/* Invisible larger click target */}
                    <circle cx={pin.x} cy={pin.y} r="18" fill="transparent" />
                  </g>
                );
              })}
            </svg>

            {/* Active Floating Pin Tooltip */}
            {activePin && (
              <div
                className="absolute pointer-events-none z-20 -translate-x-1/2 -translate-y-full transition-all duration-150 animate-in fade-in zoom-in-95"
                style={{
                  left: `${(activePin.x / 1000) * 100}%`,
                  top: `${(activePin.y / 500) * 100 - 3}%`,
                }}
              >
                <div className="bg-foreground text-background text-xs py-1.5 px-3 rounded-lg shadow-xl border border-line flex items-center gap-2 whitespace-nowrap">
                  <span className="text-sm select-none">{activePin.flag}</span>
                  <div className="text-left">
                    <span className="font-bold tracking-tight block">
                      {activePin.name}, {activePin.country}
                    </span>
                    <span className="text-[10px] text-mute dark:text-neutral-400 opacity-90 block">
                      {activePin.recentSession}
                    </span>
                  </div>
                </div>
                {/* Arrow Pointer */}
                <div className="w-2 h-2 bg-foreground rotate-45 mx-auto -mt-1" />
              </div>
            )}
          </div>

          {/* Bottom Live Activity Bar */}
          <div className="mt-4 pt-3 border-t border-line/60 flex flex-wrap items-center justify-between gap-3 text-xs text-mute">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="font-medium text-foreground">Global Call System Active</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold">
              <span>🇺🇸 North America</span>
              <span>🇬🇧 Europe</span>
              <span>🇳🇬 Africa</span>
              <span>🇦🇪 Middle East</span>
              <span>🇸🇬 Asia-Pacific</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

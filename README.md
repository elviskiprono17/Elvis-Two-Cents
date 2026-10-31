# Elvis Two Cents

Modern Next.js & Tailwind CSS rebuild of **Elvis Two Cents** — a high-fidelity interactive vector world map, responsive design, dark/light theme switching, and optimized checkout flow.

## Features

- **Next.js 14 App Router & TypeScript** — Fast, SEO-optimized, statically pre-rendered.
- **Tailwind CSS Styling** — Faithfully preserves all original branding, typography (Anton & Inter), and aesthetic tokens.
- **Enhanced Vector World Map** — Interactive world vector map featuring continental landmasses, latitude guidelines, pulsing radar signals across 16 global hubs, interactive tooltips, and a live global call status bar.
- **Streamlined Booking (Voice Blitz Only)** — Dedicated to the high-impact **Voice Strategy Blitz** (\$20 direct phone call).
- **Responsive Layout** — Designed and verified across mobile (320px+), tablet, and desktop viewports.
- **Dynamic Visitor Country Detection** — Detects visitor timezone & language to render client-side SVG country flags with tooltips.
- **Dark & Light Mode** — Seamless theme toggle with localStorage persistence and system preference detection.
- **Reviews Carousel & Trustpilot Badge** — Smooth horizontal scroll slider with interactive navigation controls and Trustpilot rating badge.
- **Payment Method Badges** — Comprehensive badges for Stripe, Visa, Mastercard, Amex, Apple Pay, Google Pay, and more.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Configuration

Embed URLs and site details can be modified in `config/site.ts`:
- `videoUrl` — MP4 or YouTube/Vimeo embed URL
- `bookingUrl` — Calendly / Cal.com / Stripe scheduler embed
- `tiktokUrl` — TikTok link
- `trustpilotUrl` — Trustpilot link

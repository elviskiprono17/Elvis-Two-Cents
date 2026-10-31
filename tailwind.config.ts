import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        alt: "var(--alt)",
        foreground: "var(--fg)",
        fg2: "var(--fg2)",
        mute: "var(--mute)",
        line: "var(--line)",
        line2: "var(--line2)",
        brandBlue: "var(--blue)",
        cardBg: "var(--card)",
        panelBg: "var(--panel)",
        land: "var(--land)",
      },
      fontFamily: {
        anton: ["var(--font-anton)", "Anton", "Impact", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      boxShadow: {
        tiktok: "4px 4px 0 #25f4ee, -4px -4px 0 #fe2c55",
        "tiktok-hover": "6px 6px 0 #25f4ee, -6px -6px 0 #fe2c55",
      },
      animation: {
        pulseRadar: "pulseRadar 2.4s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        pulseRadar: {
          "0%": { transform: "scale(1)", opacity: "0.8" },
          "100%": { transform: "scale(3.5)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

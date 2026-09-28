/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "rgb(var(--bg-page) / <alpha-value>)",
        surface: "rgb(var(--bg-card) / <alpha-value>)",
        soft: "rgb(var(--bg-soft) / <alpha-value>)",
        soft2: "rgb(var(--bg-soft-2) / <alpha-value>)",
        ink: "rgb(var(--text-primary) / <alpha-value>)",
        mist: "rgb(var(--text-muted) / <alpha-value>)",
        faint: "rgb(var(--text-subtle) / <alpha-value>)",
        line: "rgb(var(--border-color) / <alpha-value>)",
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          dark: "rgb(var(--accent-dark) / <alpha-value>)",
          soft: "rgb(var(--accent-soft) / <alpha-value>)",
          contrast: "rgb(var(--accent-contrast) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ['"Sora"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      boxShadow: {
        soft: "0 1px 2px var(--shadow-color), 0 12px 32px -12px var(--shadow-color)",
        lift: "0 20px 45px -18px var(--shadow-color)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(18px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        scaleFade: {
          "0%": { opacity: 0, transform: "scale(0.96)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        letterFade: {
          "0%, 100%": { opacity: 0.25 },
          "50%": { opacity: 1 },
        },
        // Horizontal wave sweep: scaleX creates the horizontal "wave" feel,
        // opacity controls the brightness. No color (inherits inline #fff always).
        letterSweep: {
          "0%, 100%": { opacity: "0.18", transform: "scaleX(1)" },
          "14%":      { opacity: "1",    transform: "scaleX(1.22)" },
          "28%":      { opacity: "0.18", transform: "scaleX(1)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.4 },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
        scaleFade: "scaleFade 0.6s cubic-bezier(0.16,1,0.3,1) both",
        marquee: "marquee 32s linear infinite",
        marqueeSlow: "marquee 48s linear infinite",
        marqueeReverse: "marqueeReverse 40s linear infinite",
        letterFade: "letterFade 1.1s ease-in-out infinite",
        letterSweep: "letterSweep 2.2s ease-in-out infinite",
        pulseDot: "pulseDot 2s ease-in-out infinite",
      },
      transitionTimingFunction: {
        calm: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

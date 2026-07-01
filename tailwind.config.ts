import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#f5f5f5",
        "canvas-soft": "#fafafa",
        ink: "#0c0a09",
        primary: "#292524",
        body: "#4e4e4e",
        muted: "#777169",
        "muted-soft": "#a8a29e",
        hairline: "#e7e5e4",
        "hairline-soft": "#f0efed",
        "hairline-strong": "#d6d3d1",
        card: "#ffffff",
        "surface-strong": "#f0efed",
        "dark-surface": "#0c0a09",
        "dark-elevated": "#1c1917"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "EB Garamond", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 22px 70px rgba(12, 10, 9, 0.08)",
        lift: "0 18px 45px rgba(12, 10, 9, 0.10)"
      },
      borderRadius: {
        card: "16px",
        panel: "24px"
      }
    }
  },
  plugins: []
};

export default config;

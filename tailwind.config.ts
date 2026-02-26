import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx,json}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Merriweather", "serif"],
      },
      spacing: {
        section: "5rem",
        container: "1.5rem",
      },
      maxWidth: {
        content: "72rem",
      },
      colors: {
        brand: {
          50: "#eff6ff",
          500: "#2563eb",
          700: "#1d4ed8",
        },
      },
    },
  },
  plugins: [],
};

export default config;

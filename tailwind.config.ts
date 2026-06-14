import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B3A5C",
        secondary: "#2A5F8F",
        accent: "#6BA3D6",
        background: "#F7F9FC",
        dark: "#0F2137",
        warm: "#E8D5B7",
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
        inter: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

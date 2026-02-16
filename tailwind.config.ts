import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f172a",
        card: "#1e293b",
        accent: "#3b82f6",
      },
      boxShadow: {
        glow: "0 0 20px rgba(59,130,246,0.5)",
      },
    },
  },
  plugins: [],
};
export default config;
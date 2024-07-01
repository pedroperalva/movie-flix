import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main-bg": "url('/background.jpg')",
        "black-bg": "url('/blackbg.jpg')",
      },
      fontFamily: {
        "main-name": ['"Russo One"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

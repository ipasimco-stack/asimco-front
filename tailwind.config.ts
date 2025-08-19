import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/public/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: "640px" },
      },
      colors: {
        primary_purple: "#EA580C"
      },
      fontFamily: {
        vazir: ["Vazir", "sans-serif"],
      },
      boxShadow: {
        header: "0px 2px 4px 0px rgba(0, 0, 0, 0.29)",
        bottomMenu: "0px -2px 5px 0px rgb(0 0 0 / 35%)",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
export default config;

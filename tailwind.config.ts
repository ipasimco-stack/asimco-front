import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_components/public/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: "640px" },
      },
      colors: {
        secondary_black: "#292a38",
        black_base: "#242532",
        third_black: "#2f3041",
        primary_base: "#246aed",
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
        screens: {
          DEFAULT: "85%",
        },
      },
    },
  },
  plugins: [],
};
export default config;

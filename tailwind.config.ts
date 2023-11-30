import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: { min: "320px", max: "480px" },
      md: { min: "481px", max: "768px" },
      lg: { min: "769px", max: "1067px" },
      xl: { min: "1068px", max: "1200px" },
      "2xl": { min: "1201px" },
    },
    extend: {
      colors: {
        primary: "#e1c300",
        secondary: "#212122",
      },
      fontFamily: {
        hedvig: ["Hedvig Letters Sans"],
        nova: ["Nova Square"],
      },
      boxShadow: {
        "arrival-card":
          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

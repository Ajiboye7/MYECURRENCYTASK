import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#12305B",
        secondary: {
          DEFAULT: "rgba(33, 56, 66, 0.6)",
          custom: "background: #4D533C",
        },
      },

      backgroundImage: {
        'hero-bg': "url('/assests/images/shutterstock_5245130141.png')", 
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      fontWeight: {
        regular: "400",
        medium: "500",
        bold: "700",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px', 
      },
      colors: {
        primary: "#12305B",
        secondary: {
          DEFAULT: "rgba(33, 56, 66, 0.6)",
          custom: "background: #4D533C",
        },
        tertiary:"#152934",
        btnBg:"#FC5959",
        btnHover: '#0A1E3A',
        sponsorBg:"#FFFFFF",
        circleBg:"#C4C4C4",
        cardBg:"#FBF9F2",
        footerBg:"#043C50",
        footerLink:"#ABABAB",
        socialBg:"#8FE2FF",
        footerBorder: "#5D6544",
        searchIcon:"#2C3E50",
        borderColor:"#BDBDBD"
      },

      backgroundImage: {
        'hero-bg': "url('/assests/images/shutterstock_524513014 1.png')", 
        'about-hero-bg': "url('/assests/images/shutterstock_1304655307 1.png')", 
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

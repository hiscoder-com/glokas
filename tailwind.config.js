/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "days-one": ["Days One", "sans-serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
      },
      colors: {
        green: {
          350: "#8CCAB6",
          550: "#65B29A",
          650: "#0EAD69",
        },
        gray: {
          150: "#F4F9FA",
          250: "#F2F2F2",
          350: "#DFECF0",
          450: "#757575",
        },
        zinc: {
          150: "#F6FBF9",
        },
        yellow: {
          550: "#F1C40F",
        },
        blue: {
          250: "#8CBBCA",
          650: "#1A3E59",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

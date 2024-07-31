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
        },
        gray: {
          250: "#F2F2F2",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

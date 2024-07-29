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
      colors: {
        green: {
          350: "#8CCAB6",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

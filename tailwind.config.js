const { transform } = require("framer-motion");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        animationLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },

        animationRight: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },

        animatioLefttoRight: {
          "0%": { transform: "translateX(0%)" },
          "30%": { transform: "translateX(100%)" },
          "70%": { transform: "translateX(100%)" },
          "71%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        animatioRighttoLeft: {
          "0%": { transform: "translateX(0%)" },
          "30%": { transform: "translateX(-100%)" },
          "70%": { transform: "translateX(-100%)" },
          "71%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        animationLeft: "animationLeft 0.3s ease-out forwards",
        animationRight: "animationRight 0.3s ease-out forwards",
        animatioLefttoRight: "animatioLefttoRight 0.6s ease-out ",
        animatioRighttoLeft: "animatioRighttoLeft 0.6s ease-out ",
      },
      colors: {
        customPrimary: "#f9cdcd",
        customBlack: "#252422",
        customWhite: "#f4f4f4",
        customGray: "#5e5e5e",
      },
      screens: {
        md: "1270px",
      },
    },
  },
};

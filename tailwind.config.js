/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        lineOnHover: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        lineOnOut: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        lineOnHover: "lineOnHover 0.3s ease-out forwards",
        lineOnOut: "lineOnOut 0.3s ease-out forwards",
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

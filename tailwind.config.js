/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customPrimary: "#f9cdcd",
        customBlack: "#252422",
        customWhite: "#f4f4f4",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        bg:"#E7E5DF",
        highlights:"#E7BB41",
        text:"#FFFFFF",
        lightContrast:"#393E41",
        strongContrast:"#2C363F"
      }
    },
  },
  plugins: [],
};

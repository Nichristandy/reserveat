/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#B6231D",
        white: "#F3F2EC",
        grey: "#E9E8DC",
        blue: "#153745",
      },
    },
  },
  plugins: [],
};

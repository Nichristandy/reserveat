/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        rioburger: "url('/public/SeemoreAssets/burger_rio.jpg')",
        pizaudin: "url('/public/SeemoreAssets/pizza_udin.jpg')",
        ayamgoyeng: "url('/public/SeemoreAssets/ayamgoyeng.jpg')",
        cikenmasala: "url('/public/SeemoreAssets/cikenmasala.jpg')",
        saladberenti: "url('/public/SeemoreAssets/saladberenti.jpg')",
      },
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

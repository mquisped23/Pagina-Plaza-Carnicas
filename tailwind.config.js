/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./components/**/*.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          wine: "#600804",
          wineDark: "#3B0301",
          wineHover: "#720A05",
          gold: "#EAB237",
          goldHover: "#F3C65A",
          dark: "#101820",
          black: "#070707",
          cream: "#F8F5EF",
          gray: "#6B7280",
          white: "#FFFFFF"
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Playfair Display", "serif"]
      },
      backgroundImage: {
        texture: "url('https://www.transparenttextures.com/patterns/dark-matter.png')"
      }
    }
  },
  plugins: []
}
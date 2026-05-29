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
          wine: "#5E0602",
          wineDark: "#3B0301",
          wineHover: "#630804",
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
        // Texture now handled via .bg-noise class in input.css (self-hosted SVG)
      }
    }
  },
  plugins: []
}
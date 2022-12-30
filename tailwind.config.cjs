/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'movie-name': ['Montserrat', 'sans-serif']
      },
      fontSize:{
        'small': '0.05rem'
      }
    },
  },
  plugins: [],
}
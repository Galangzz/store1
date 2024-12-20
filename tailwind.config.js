/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto Condensed', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}


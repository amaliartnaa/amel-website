/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'purple': '#5952A4'
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
        display: ['Bebas Neue', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif']
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '300': '300px',
        '350': '350px'
      },
      margin: {
        '100px': '100px',
      },
      colors: {
        'purple-transition': '#25004C',
        'purple-black': '#380075',
        'dash-board': '#07004F'
      }
    },
  },
  plugins: [],
}


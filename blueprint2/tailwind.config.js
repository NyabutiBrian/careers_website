/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins'],
      },
      colors: {
        primary: '#00008B',
        secondary: '#363753',
        white: '#FEFEFE',
        dark: '#262626',
        cream: '#DFE3EE',
        gold: '#B38B59'
      },
    },
  },
  plugins: [require("daisyui")],
}


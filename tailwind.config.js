/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          'primary-dark': '#13192F',
          'secondary-dark':'#C92C5A'
        },
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        robotoCondensed: ['Roboto Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'teal-transparent': 'rgba(15, 118, 110, 0.5)',
      },
      inset: {
        '50%': '50%'
      },
      width: {
        'fitcontent': 'fit-content'
      },

    },
  },
  plugins: [],
}
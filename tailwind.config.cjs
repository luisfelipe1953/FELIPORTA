/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          'grayDark': '#191825',
          'purple': '#865DFF',
          'pinkLight': '#FFA3FD',
          'pink': '#E384FF',
          'hueso': '#EEEEEE',
      },
    },
  },
  plugins: [],
}

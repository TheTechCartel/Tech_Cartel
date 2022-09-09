/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        clashGrotesk: 'ClashGrotesk-Variable'
      },
      colors:{
        primary:{
          DEFAULT:"#415A80"
        },
        secondary:{
      DEFAULT: '#F5F5F5'
        }
      }
    },
  },
  plugins: [],
}
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
        tcBG:{
          DEFAULT:"#F2F4F8"
        },
        error:"#F65D5D"
      }
    },
  },
  plugins: [],
}

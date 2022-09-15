/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        clashGrotesk: 'ClashGrotesk-Variable',
        alt: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        workSans : "'Work Sans', sans-serif;",
      },
      colors:{
        primary:"#415A80",
        tcBG:"#F2F4F8",
        error:"#F65D5D",
        secondary:'#F5F5F5'
      }
    },
  },
  plugins: [],
}
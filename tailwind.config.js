/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors:{
        cblue:"#3187ED",
        cgray:"#8D8D8D",
        ccyan:"#00C6D7"
      }
    },
  },
  plugins: [],
}



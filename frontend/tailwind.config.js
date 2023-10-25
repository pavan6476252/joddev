/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    container:{
      center:true,
      padding:{
        DEFAULT:'1rem',
      }
    },
    extend: {
      
    },
  },
  plugins: [require('@tailwindcss/typography')],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary:'#014275',
        secondary:'#0F87E4',  
        third:"#33B804",
        fourth:"#B90310"
        
      }, 

    },   
   
  },
  plugins: [], 
}
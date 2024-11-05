/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true,
        padding:"2rem"
      },
      fontFamily:{
        sans: ['Inter', 'sans-serif'],
        'bebas': ['Bebas Neue', 'cursive'],
        'outfit': ['Outfit', 'sans-serif'],
        'roboto':['Roboto','sans-serif']
      },
      colors:{
        buttons: "#FEBF00"
      },
      backgroundImage:{
        "shapeImage":"url('./src/assets/rectangle.svg')",
         'red-gradient': 'linear-gradient(90deg, rgba(189, 31, 23, 0) 32.88%, rgba(189, 31, 23, 0.7) 100%)',
         "formImage":"url('./src/assets/formImage.jpeg')",
         "footerImage":"url('./src/assets/footerImage.jpg')"
        
      },
    
    },
  },
  plugins: [],
}
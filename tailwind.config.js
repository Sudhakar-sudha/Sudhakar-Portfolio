/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 2s linear infinite',
        'spin-delay': 'spin 2s linear infinite',
      },
      backgroundImage:{
          'myImage':"url('../assests/sudhakar.png')",
      },  
      screens: {
        sm: "480px",  // Adjust small to 480px
        // xl: "1440px", // Adjust extra-large to 1440px
      },
    },
  },
   variants: {
    extend: {},
  },
  plugins: [],
}


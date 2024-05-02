/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    // 'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'space': "url('./src/assets/night-sky.png')",
      },
      fontFamily: {
        'digital': ['digital', 'sans-serif'],  // after you font, add some fonts separated by commas to handle fallback.
        "poppins": ['Poppins', 'sans-serif'] 
      }
    },
  },
  plugins: [
   
  ],
}


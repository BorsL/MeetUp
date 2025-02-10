/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: "#fb8500", 
        color2: "#ffb703", 
        color3: "#023047",
        color4: "#219ebc",
        color5: "#8ecae6",
        color6: "#ffffff",
        color7: "#000000",

      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
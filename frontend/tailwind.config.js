/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        floating: "floating 4s ease-in-out infinite",
      },
      keyframes: {
        floating: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
      },
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
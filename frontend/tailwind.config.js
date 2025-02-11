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
  daisyui: {
    themes: [
      {
        dark: {
          "primary": "#38bdf8", // Teal blue
          "secondary": "#818cf8", // Purple
          "accent": "#f471b5", // Pink
          "neutral": "#1e293b", // Dark gray
          "base-100": "#0f172a", // Dark blue background
          "info": "#0ca5e9", // Info blue
          "success": "#2dd4bf", // Success green
          "warning": "#f59e0b", // Warning orange
          "error": "#fb7185", // Error red
        },
      },
    ], // Only dark theme
    darkTheme: "dark", // Set dark as the default theme
  },
}
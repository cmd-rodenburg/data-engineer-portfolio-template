/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        moss: {
                50: "#E9FBF0",
                100: "#CFF7DE",
                200: "#9FEFBC",
                300: "#6FE69B",
                400: "#40DE7A",
                500: "#22C55E",
                600: "#1B9D4B",
                700: "#147538",
                800: "#0D4E25",
                900: "#072713",
                950: "#04160A"
              }
      },
    },
  },
  plugins: [],
}
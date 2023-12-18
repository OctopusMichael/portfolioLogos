/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueAqua: "#5BBFD6",
        blueAquaHover: " #5bbfd6ad"
      }
    },
  },
  plugins: [],
}


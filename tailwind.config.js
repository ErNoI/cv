/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#31333b",
        secondary: "#3d3e42",
        action: "#ffd06e",
        accent: "#62533c",
      },
      fontFamily: {
        cabin: ["Cabin", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

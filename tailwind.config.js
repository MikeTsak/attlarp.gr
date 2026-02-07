/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#d41121",
        "primary-dark": "#8a0b16",
        "background-light": "#f8f6f6",
        "background-dark": "#181112",
        "surface-dark": "#221012",
        gold: "#c5a059", // From Setting page
        "text-muted": "#b99d9f", // From Setting page
      },
      fontFamily: {
        display: ["Be Vietnam Pro", "sans-serif"],
        serif: ["Noto Serif", "serif"], // From Storytellers
        gallery: ["Manrope", "sans-serif"], // From Gallery
        tech: ["Space Grotesk", "sans-serif"], // From Setting
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        "x-sm": {
          min: "0px",
          max: "305px",
        },
        "H-sizing": {
          min: "765px",
          max: "904px",
        },
        "title-change": {
          min: "0px",
          max: "1025px",
        },
      },
    },
  },
  plugins: [],
}

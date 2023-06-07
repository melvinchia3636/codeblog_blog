/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      colors: {
        gray: {
          700: "#343434",
          600: "#777777",
          500: "#BBBBBB",
        },
        yellow: {
          700: "#F7BC06",
        },
      },
    },
    fontFamily: {
      montserrat: ["Montserrat"],
    },
    fill: (theme) => ({
      yellow: theme("colors.yellow.700"),
    }),
  },
  plugins: [],
};

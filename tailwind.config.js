module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
            gray: {
                700: "#343434",
                600: "#777777"
            },
            yellow: { 
                700: "#F7BC06"
            }
        }
    },
    fontFamily: {
        'montserrat': ["Montserrat"]
    },
    fill: theme => ({
       'yellow': theme('colors.yellow.700'),
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

const { default: ColorName } = require("color-name");

module.exports = {
  content: ["./index/**/*.{html,js}"],
  theme: {
    fontFamily:{
      inter:"Inter",
    },
    extend: {
      colors:{
        1:"#FF9846",
        2:"#A4ACAD",
        3:"#000",
        4:"#EB5757",
      },
    },
  },
  plugins: [],
}


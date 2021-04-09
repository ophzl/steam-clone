const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      gray: {
        DEFAULT: "#878787",
        50: "#FFFFFF",
        100: "#F7F7F7",
        200: "#DBDBDB",
        300: "#BFBFBF",
        400: "#A3A3A3",
        500: "#878787",
        600: "#616161",
        700: "#3B3B3B",
        800: "#141414",
        900: "#000000",
      },
    },

    extend: {
      height: (theme) => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ["hover", "focus"],
    },
  },
  plugins: [],
};

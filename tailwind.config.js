/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ["Scope One", ...fontFamily.sans],
      serif: ["Scope One", ...fontFamily.serif],
    },
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1264px",
      },
    },
    extend: {
      fontFamily: {
        sans: 'var(--font-scto)',
      },
      colors: {
        white: "#ffffff",
        black: "#000000",
        text: "#464646",
        primary: "#ffffff",
        secondary: "#000",
        link: "#000",
        "link-hover": "#555",
        body: "#b6294b",
        border: "#fcece7",
        pink: "#eec2cb",
        "gray-lighter": "#dbdbdb",
        gray: "#767775",
        "gray-darker": "#5f635d",
        error: "#ee2000",
        success: "#008068",
      },
      boxShadow: {
        DEFAULT: '0 0px 10px 0 rgb(0 0 0 / 0.1), 0 0px 2px 0px rgb(0 0 0 / 0.1) ',
        lg: '0 0px 20px 0 rgb(0 0 0 / 0.1), 0 0px 5px 0px rgb(0 0 0 / 0.1) ',
      }
    },
  },
  darkMode: "class",
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("tw-elements/plugin.cjs"),
  ],
}

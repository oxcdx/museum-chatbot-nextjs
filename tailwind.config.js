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
      sans: ["Open Sans", ...fontFamily.sans],
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
      colors: {
        white: "#ffffff",
        black: "#000000",
        text: "#464646",
        primary: "#b6294b",
        secondary: "#332984",
        link: "#000",
        "link-hover": "#06e3dc",
        body: "#b6294b",
        border: "#fcece7",
        pink: "#eec2cb",
        "gray-lighter": "#dbdbdb",
        gray: "#767775",
        "gray-darker": "#5f635d",
        error: "#ee2000",
        success: "#008068",
      },
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

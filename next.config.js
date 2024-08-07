const { i18n } = require("./next-i18next.config")

module.exports = {
  i18n,
  images: {
    domains: [process.env.NEXT_IMAGE_DOMAIN],
  },
  compiler: {
    styledComponents: true,
  }
}

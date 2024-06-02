const path = require("path")

const config = require("./site.config")

module.exports = {
  debug: false,
  i18n: {
    defaultLocale: config.defaultLocale,
    locales: Object.keys(config.locales),
    localeDetection: false,
  },
  domains: [
    {
      domain: 'localhost:3000',
      defaultLocale:'en',
      http: true,
    }
  ],
  /** To avoid issues when deploying to some paas (vercel...) */
  // localePath:
  //   typeof window === 'undefined'
  //     ? require('path').resolve('./public/locales')
  //     : '/locales',
  reloadOnPrerender: true,
}

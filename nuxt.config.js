export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  router: {
    base: '/bitcoin-chart/',
  },
  head: {
    title: 'bitcoin',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
  },

  proxy: {
    '/proUrl/': {
      target:
        'https://api.nomics.com/v1/currencies/sparkline?key=374854edbb47b06a783519eefdbd7e3815cc721b&ids=BTC,ETH,XRP&start=2018-04-14T00%3A00%3A00Z&end=2018-05-14T00%3A00%3A00Z',
      pathRewrite: {
        '^/proUrl/': '',
      },
    },

    '/price/': {
      target:
        'https://api.nomics.com/v1/currencies/ticker?key=374854edbb47b06a783519eefdbd7e3815cc721b&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&per-page=100&page=1',
      pathRewrite: {
        '^/price/': '',
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}

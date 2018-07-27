module.exports = {
  /** Page headers */
  head: {
    title: 'SiteWhere Community Website',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'SiteWhere Community Website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /** Add middleware components */
  router: {
    middleware: 'vue-i18n'
  },

  /** Common CSS files */
  css: [
    {src: 'vuetify/dist/vuetify.min.css'}
  ],

  /** List of plugins */
  plugins: [
    '~plugins/vuetify.js',
    '~plugins/vue-i18n.js',
    '~plugins/fontawesome.js'
  ],

  /** Progress bar color */
  loading: { color: '#3B8070' },

  /** List of routes to generate */
  generate: {
    routes: [
      '/en',
      '/fr'
    ]
  },

  /** Build configuration */
  build: {
    extractCSS: true,

    /** Vendor libraries */
    vendor: [
      'vuetify',
      'vue-i18n',
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-brands-svg-icons',
      '@fortawesome/free-solid-svg-icons'
    ],

    /** Run ESLint */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

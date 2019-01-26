module.exports = {
  /** Page headers */
  head: {
    title: "SiteWhere Open Source Internet of Things Platform",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "google-site-verification",
        content: "_toH0jMl-zSgM3y_Hqo3Y-ehcIFMyxqwd55Kc462yrM"
      },
      {
        hid: "description",
        name: "description",
        content:
          "SiteWhere is an industrial-strength open source application enablement platform for the Internet of Things (IoT). It provides a multi-tenant microservice-based infrastructure built on Kubernetes."
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /** Add middleware components */
  router: {
    middleware: "vue-i18n"
  },

  /** Common CSS files */
  css: ["vuetify/dist/vuetify.min.css", "~/styles/override.css"],

  /** List of plugins */
  plugins: [
    { src: "~plugins/ga.js", ssr: false },
    "~plugins/vuetify.js",
    "~plugins/vue-i18n.js"
  ],

  modules: [
    [
      "vue-github-buttons/nuxt",
      {
        css: false,
        useCache: false // Don't use cache
      }
    ]
  ],

  /** Progress bar color */
  loading: { color: "#3B8070" },

  /** List of routes to generate */
  generate: {
    routes: ["/en", "/es", "/cn", "/ja", "/vn", "/fr"]
  },

  /** Build configuration */
  build: {
    extractCSS: true,

    /** Vendor libraries */
    vendor: ["vuetify", "vue-i18n"],

    /** Run ESLint */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};

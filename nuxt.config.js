
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Green Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A green blog about environment, nature and a healthy happy life' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Barlow+Condensed:100,100i,200,200i,300,300i,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.css',
    'bootstrap-css-only/css/bootstrap.min.css',
    'mdbvue/lib/css/mdb.min.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/date-filter.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
  ],
  axios: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-24bc5.firebaseio.com',
    credentials: false
  },
  /*
  ** Build configuration
  */
  build: {
    extend(config, ctx) {},
    transpile: [
      'mdbvue/lib/components'
    ],
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-24bc5.firebaseio.com',
    loginAPIKey: 'AIzaSyCoTH3NID9PDxDCt6ZelnfJ--fFfvCQHg0'
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  router: {
    middleware: 'log'
  }
}

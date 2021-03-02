export default {
  env: {
    strapiBaseUri: process.env.API_URL || "http://localhost:1337"
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  generate: {
    routes: function() {
      const fs = require('fs');
      const path = require('path');
      return fs.readdirSync('./content/blog').map(file => {
        return {
          route: `/blog/${path.parse(file).name}`, // Return the slug
          payload: require(`./content/blog/${file}`),
        };
      });
    },
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dontbebrokebewoke',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Staatliches'},
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'uikit/dist/css/uikit.min.css',
    'uikit/dist/css/uikit.css',
    
    '@assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/uikit.js', ssr: false },
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/apollo',
    '@nuxt/content',
    
  ],
  content:{
     //Options
  },
  apollo: {  
    clientConfigs: {
      default: {
        httpEndpoint: process.env.BACKEND_URL || "http://localhost:1337/graphql"
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

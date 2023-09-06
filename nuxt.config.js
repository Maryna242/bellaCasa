export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',
  buildDir: 'nuxt-dist',
  modern: 'server',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'bellaCasa',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/index.scss',
    'animate.css/animate.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  purgeCSS: {
    safelist: ["aos-init", "aos-animate", "data-aos-delay", "data-aos-duration", "fade-up", "zoom-in"],
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    display: 'swap',
    families: {
      Montserrat: {
        wght: [600],
      },
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/image',
    'nuxt-purgecss',
    'nuxt-i18n',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [({ isLegacy }) => isLegacy && 'axios'],
    optimization: {
        minimize: true,
        splitChunks: {
            chunks: 'all',
            automaticNameDelimiter: '.',
            name: true,
            cacheGroups: {}
        }
    },
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    injectPosition: 'first',
    viewer: true,
  },

  plugins: [
    {
      src: '~/plugins/lightbox.js',
      ssr: false
    }
  ],
  image: {
    inject: true
  },
  i18n: {
    legacy: false,
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
      },
      {
        code: 'ua',
        iso: 'uk-UA',
        name: 'Українська',
      },
    ],
    defaultLocale: 'ua',
    vueI18n: {
      fallbackLocale: 'ua',
      messages: {
        en: require('./locales/en.json'),
        ua: require('./locales/ua.json'),
      },
    },
  },
  
}

  
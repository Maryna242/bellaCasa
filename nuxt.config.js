export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  buildDir: 'nuxt-dist',
  // modern: 'server',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Салон Bella Casa',
    htmlAttrs: {
      lang: 'ua'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Завітайте до Салону штор Bella Casa і виберіть ідеальні штори для вашого дому. Найкращий вибір та якість. Замовте зараз і створіть затишок у своєму інтер'єрі!" },
      { hid: 'keywords', name: 'keywords', content: "Купить шторы, Магазин штор, Салон штор, ткани для штор,  Шторы на заказ, Дизайн интерьерных штор, Гардины и портьеры, Шторы, Римские шторы, Занавески и тюли, Эксклюзивные шторы, Солнцезащитные шторы, Пошив штор, Дизайн штор, Карнизы для штор, Алюминиевые карнизы, Автоматические карнизы, Умный дом, Автоматические жалюзи, Автоматические рулонные шторы, Купити штори, Магазин штор, Салон штор, Тканини для штор, Штори на замовлення, Дизайн інтер'єрних штор, Гардини і портьєри, Штори, Римські штори, Завіски та тюлі, Ексклюзивні штори, Сонцезахисні штори, Пошив штор, Дизайн штор, Карнизи для штор, Алюмінієві карнизи, Автоматичні карнизи, Розумний будинок, Автоматичні жалюзі, Автоматичні рулонні штори, Жалюзи на заказ, Горизонтальные жалюзи, Вертикальные жалюзи, Рулонные жалюзи, Деревянные жалюзи, Тканевые жалюзи, Жалюзи для окон, Солнцезащитные жалюзи, Электрические жалюзи, Жалюзи для офисов, Рулонные шторы, Пошив штор, Цена шторы и гардины, Эксклюзивные шторы для дома, Жалюзі на замовлення, Горизонтальні жалюзі, Вертикальні жалюзі, Рулонні жалюзі, Дерев'яні жалюзі, Тканинні жалюзі, Жалюзі для вікон, Сонцезахисні жалюзі, Електричні жалюзі, Жалюзі для офісів, Рулонні штори, Пошиття штор, Ціни на штори і гардини, Ексклюзивні штори для дому, Шторы Киев, Купить шторы в Киеве, Интерьерные шторы в Киеве, Шторы на заказ Киев, Дизайн штор для киевской квартиры, Солнцезащитные шторы Киев, Шторы для офисов в Киеве, Гардины и занавески в Киеве, Жалюзи Киев, Рулонные шторы в Киеве, Цены на шторы в Киеве, Установка штор в Киеве, Штори Київ, Купити штори в Києві, Інтер'єрні штори в Києві, Штори на замовлення Київ, Дизайн штор для київської квартири, Сонцезахисні штори Київ, Штори для офісів в Києві, Гардини та завіски в Києві, Жалюзі Київ, Рулонні штори в Києві, Ціни на штори в Києві, Встановлення штор в Києві, Шторы Днепр, Купить шторы в Днепре, Интерьерные шторы в Днепре, Шторы на заказ в Днепре, Дизайн штор для дома в Днепре, Солнцезащитные шторы Днепр, Гардины и занавески в Днепре, Жалюзи Днепр, Рулонные шторы в Днепре, Цены на шторы в Днепре, Установка штор в Днепре, Штори Дніпро, Купити штори у Дніпрі, Інтер'єрні штори у Дніпрі, Штори на замовлення у Дніпрі, Дизайн штор для дому у Дніпрі, Сонцезахисні штори Дніпро, Гардини та завіски у Дніпрі, Жалюзі Дніпро, Рулонні штори у Дніпрі, Ціни на штори у Дніпрі, Встановлення штор у Дніпрі" },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/big_logo.webp' },
      { rel: 'preload', type: 'video/mp4', href: '/video/first_screen_video.mp4' },
      { rel: 'alternate', hreflang: 'uk-UA', href: 'https://salon-bellacasa.com/' },
      { rel: 'alternate', hreflang: 'en-US', href: 'https://salon-bellacasa.com/en' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/index.scss',
  ],

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
    '@nuxtjs/robots',
  ],
  robots: [
      {
          UserAgent: '*'
      },
      {
          Allow: '/'
      },
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
    postcss: {
      postcssOptions: {
        plugins: {
          // Добавьте плагин 'postcss-import' для обработки импортов CSS
          'postcss-import': true,
          // Другие плагины PostCSS
          // ...
        },
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


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/lightbox.js',
      ssr: false
    },
    { src: '~/plugins/wow.js.js', ssr: false },
    { src: '~/plugins/ga4.js', ssr: false },
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
  // serverMiddleware: [
  //   { path: '/api', handler: '~/api/submit-form.php' }
  // ],
  
}

  
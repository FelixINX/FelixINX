import en from './i18n/en'
import fr from './i18n/fr'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  modern: 'client',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'felixinx.me',
    titleTemplate: '%s | felixinx.me',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'alternate icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: `${
          process.env.NODE_ENV === 'development'
            ? '/fonts'
            : 'https://fonts.felixinx.me'
        }/basier_circle/stylesheet.css`,
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://www.npmjs.com/package/@nuxtjs/fontawesome
    '@nuxtjs/fontawesome',
    '@aceforth/nuxt-optimized-images',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-i18n',
    'nuxt-lazy-load',
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['fontsource-assistant/latin.css'],
  },

  // Font Awesome module Configuration
  fontawesome: {
    component: 'fa',
    icons: {
      brands: ['faGithub', 'faInstagram', 'faLinkedin'],
    },
    proIcons: {
      regular: [
        'faArrowLeft',
        'faArrowRight',
        'faUserTie',
        'faFolders',
        'faCommentAltLines',
        'faExternalLink',
        'faTimes',
        'faBars',
        'faConstruction',
        'faPaperPlane',
        'faCheck',
        'faArrowDown',
        'faNewspaper',
        'faCode',
        'faGlobe',
        'faHome',
        'faAtlas',
        'faBus',
        'faPenNib',
        'faSubway',
        'faDesktop',
        'faQrcode',
      ],
    },
  },

  // i18n module Configuration
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'fr',
    vueI18n: {
      fallbackLocale: 'en',
      messages: { en, fr },
    },
  },

  // Tailwind module Configuration
  tailwindCss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
  },

  // Misc config
  loading: {
    color: '#fff',
    height: '5px',
    failedColor: 'red',
  },
  loadingIndicator: {
    name: 'circle',
    color: '#fff',
    background: '#0E273C',
  },

  // PWA module config
  pwa: {
    meta: {
      theme_color: '#0D2336',
    },
    manifest: {
      name: 'Félix Desjardins | felixinx.me',
      short_name: 'felixinx.me',
      description: 'Mon site perso / My personnal website',
    },
  },
  // Optimized images config
  optimizedImages: {
    optimizeImages: true,
  },
}

export default {
    env: {
        baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    },
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'xoxolovegen',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/css/main.scss', '~/assets/css/typography.scss'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [{ src: '~/plugins/vue-agile', mode: 'client' }, '~plugins/date'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        '@nuxtjs/style-resources',
        '@nuxtjs/google-fonts',
        '@nuxtjs/fontawesome',
    ],
    googleFonts: {
        families: {
            Parisienne: true,
            Simonetta: true,
        },
    },
    styleResources: {
        scss: [
            '~/assets/scss/variables.scss',
            '~/assets/scss/breakpoints.scss',
            '~/assets/scss/mixins.scss',
            '~/assets/scss/typography.scss',
        ],
    },
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/content
        '@nuxt/content',
        '@nuxt/image',
    ],
    fontawesome: {
        icons: {
            solid: ['faEnvelope', 'faMapMarkerAlt', 'faCaretDown', 'faArrowRight', 'faInfo', 'faCheck', 'faTimes'],
            brands: ['faDev', 'faFacebook', 'faTwitter', 'faLinkedin', 'faInstagram'],
        },
    },
    // Content module configuration: https://go.nuxtjs.dev/config-content
    content: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
}

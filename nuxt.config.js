export default {
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
    css: ['~/assets/css/main.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['~plugins/vue-awesome-swiper', '~plugins/date'],

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
        '@nuxtjs/sitemap',
    ],
    fontawesome: {
        icons: {
            solid: ['faEnvelope', 'faMapMarkerAlt', 'faCaretDown', 'faArrowRight', 'faInfo', 'faCheck', 'faTimes'],
            brands: ['faDev', 'faFacebook', 'faTwitter', 'faLinkedin', 'faInstagram'],
        },
    },
    // Content module configuration: https://go.nuxtjs.dev/config-content
    content: {},
    sitemap: {
        hostname: 'https://xoxolovegen-setup.netlify.app/',
        gzip: true,
        routes: async () => {
            const { $content } = require('@nuxt/content')

            const projects = await $content('portfolio').only(['path']).fetch()

            return projects.map((p) => p.path)
        },
    },
    generate: {
        async routes() {
            const { $content } = require('@nuxt/content')
            const files = await $content({ deep: true }).only(['path']).fetch()

            return files.map((file) => (file.path === '/index' ? '/' : file.path))
        },
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
}

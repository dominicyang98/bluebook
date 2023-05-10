// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
    modules: [
        '@nuxtjs/manifest',
    ],
    manifest: {
        name: 'My App',
        short_name: 'My App',
        icons: [
            {
                src: '/favicon-512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    },
}

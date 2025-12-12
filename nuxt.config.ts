// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Nouns: The Card Game',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A strategic card game featuring the iconic Nouns characters. Collect points, play action cards, and outsmart your opponents! Free to download and print.' },
        { name: 'keywords', content: 'Nouns, card game, Nouns DAO, board game, strategy game, printable game' },
        { name: 'author', content: 'Tempe Techie' },
        { name: 'robots', content: 'index, follow' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Nouns: The Card Game' },
        { property: 'og:image', content: '/img/preview-fb.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: '/img/preview.jpg' },
        { name: 'twitter:creator', content: '@tempetechie' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  }
})

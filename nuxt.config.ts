// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "@nuxt/image"],
  nitro: {
    experimental: {
      websocket: true
    }
  },
  image: {
    dir: 'assets/images'
  }
})
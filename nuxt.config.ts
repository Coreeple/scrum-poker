// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "nuxt-build-cache", "@nuxt/image"],
  build: {
    transpile: ['trpc-nuxt']
  },
  image: {
    dir: 'assets/images'
  }
})
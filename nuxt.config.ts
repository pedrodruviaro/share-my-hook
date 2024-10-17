// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  imports: {
    dirs: ["./composables/auth"],
  },
  colorMode: {
    preference: "dark",
    fallback: "dark",
    classPrefix: "",
    classSuffix: "-mode",
    storageKey: "sharemyhook-color-mode",
  },
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/supabase", "@pinia/nuxt"],
  imports: {
    dirs: ["./composables/auth", "./composables/profiles"],
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.SITE_URL,
    },
  },
  supabase: {
    redirectOptions: {
      login: "/auth/login",
      callback: "/auth/redirect",
      exclude: ["/", "/public/*"],
    },
  },
  colorMode: {
    preference: "dark",
    fallback: "dark",
    classPrefix: "",
    classSuffix: "-mode",
    storageKey: "sharemyhook-color-mode",
  },
  tailwindcss: {
    exposeConfig: true,
  },
})
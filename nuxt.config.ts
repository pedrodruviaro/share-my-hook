// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://esm.sh/@wooorm/starry-night@3/style/both",
        },
      ],
    },
  },

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
  tailwindcss: {
    exposeConfig: true,
  },
})

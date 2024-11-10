// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/supabase",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/seo",
  ],
  imports: {
    dirs: [
      "./composables/auth",
      "./composables/profiles",
      "./composables/hooks",
      "./composables/reports",
    ],
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
      exclude: ["/", "/hook/*", "/users/*"],
    },
  },
  colorMode: {
    preference: "dark",
    storageKey: "sharemyhook-color-mode",
  },
  tailwindcss: {
    exposeConfig: true,
  },
  vite: {
    ssr: {
      external: ["vscode-oniguruma"],
    },
  },
  site: {
    url: process.env.SITE_URL,
    name: "ShareMyHook",
    description:
      "Descrubra e compartilhe hooks personalizados para acelerar o seu desenvolvimento e de quebra ainda ajude a comunidade",
    defaultLocale: "pt-BR",
  },
  robots: {
    disallow: ["/dashboard"],
  },
})

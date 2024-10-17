import { install as VueMonacoEditor } from "@guolao/vue-monaco-editor"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueMonacoEditor, {
    paths: {
      vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs",
    },
  })
})

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "pt-BR",
  },
  titleTemplate: (chunk) => {
    return chunk ? `${chunk} - shareMyHook` : "shareMyHook"
  },
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#38BDF8" :height="4" />
    <NuxtPage />

    <UNotifications />
  </NuxtLayout>
</template>

<style>
body {
  @apply bg-slate-50 dark:bg-slate-950;
}

body,
html {
  @apply scroll-smooth;
}
</style>

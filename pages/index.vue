<script setup lang="ts">
useSeoMeta({
  title: "Compartilhe seus hooks de forma fácil",
})

const router = useRouter()

defineOgImageComponent("NuxtSeo", {
  title: "shareMyHook",
  description: "Compartilhe seus hooks de forma fácil",
  colorMode: "dark",
  theme: "#38bdf8",
})
</script>

<template>
  <div>
    <LandingPageHero @wants-login-with-github="router.push('/auth/login')" />
  </div>
</template>

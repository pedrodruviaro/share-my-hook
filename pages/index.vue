<script setup lang="ts">
useSeoMeta({
  title: "Compartilhe seus hooks de forma fácil",
})

const router = useRouter()
</script>

<template>
  <div>
    <LandingPageHero @wants-login-with-github="router.push('/auth/login')" />
  </div>
</template>

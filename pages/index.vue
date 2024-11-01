<script setup lang="ts">
const router = useRouter()

const handleNavigateToLogin = () => {
  router.push("/auth/login")
}

useSeoMeta({
  title: "Compartilhe seus hooks de forma fácil",
})
</script>

<template>
  <BaseLayoutWrapper>
    <template #header>
      <LandingPageHeader @wants-login-with-github="handleNavigateToLogin" />
    </template>
    <LandingPageHero @wants-login-with-github="handleNavigateToLogin" />
  </BaseLayoutWrapper>
</template>

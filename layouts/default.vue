<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div>
    <BaseLayoutWrapper class="calc-height">
      <template #header>
        <PublicHeader @wants-login-with-github="router.push('/auth/login')" />
      </template>

      <main>
        <slot />
      </main>
    </BaseLayoutWrapper>

    <LayoutFooter />
  </div>
</template>

<style scoped>
.calc-height {
  min-height: calc(100vh - 64px);
}
</style>

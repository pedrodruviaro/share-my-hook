<script setup lang="ts">
const { isLogged } = storeToRefs(useUserStore())

const router = useRouter()
</script>

<template>
  <div>
    <BaseLayoutWrapper class="calc-height">
      <template #header>
        <PublicLoggedHeader
          v-if="isLogged"
          @back-to-dashboard="() => router.push('/dashboard')"
        />

        <PublicHeader
          v-else
          @wants-login-with-github="() => router.push('/auth/login')"
        />
      </template>

      <UContainer>
        <slot />
      </UContainer>
    </BaseLayoutWrapper>

    <LayoutFooter />
  </div>
</template>

<style scoped>
.calc-height {
  min-height: calc(100vh - 64px);
}
</style>

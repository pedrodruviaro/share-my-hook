<script setup lang="ts">
const { isLogged } = storeToRefs(useUserStore())

const router = useRouter()
</script>

<template>
  <BaseLayoutWrapper>
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
</template>

<script setup lang="ts">
const emits = defineEmits<{
  (e: "wants-login-with-github"): void
}>()
</script>

<template>
  <header class="py-4">
    <UContainer>
      <div class="flex flex-wrap gap-2 justify-between items-center">
        <NuxtLink to="/">
          <Logo />
        </NuxtLink>

        <div class="flex gap-2 flex-wrap">
          <DarkModeToggler />
          <UButton
            label="Entrar com Github"
            icon="i-heroicons-arrow-right-end-on-rectangle"
            trailing
            @click="emits('wants-login-with-github')"
          />
        </div>
      </div>
    </UContainer>
  </header>
</template>

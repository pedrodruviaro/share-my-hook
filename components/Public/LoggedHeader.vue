<script setup lang="ts">
const emits = defineEmits<{
  (e: "back-to-dashboard"): void
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
          <UButton
            variant="ghost"
            color="black"
            label="Dashboard"
            icon="i-heroicons-arrow-left"
            @click="emits('back-to-dashboard')"
          />
          <DarkModeToggler />
        </div>
      </div>
    </UContainer>
  </header>
</template>

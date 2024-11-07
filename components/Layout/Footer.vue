<script setup lang="ts">
const currentYear = computed(() => {
  return new Date().getFullYear()
})
</script>

<template>
  <footer class="bg-slate-200 dark:bg-slate-900 py-6">
    <UContainer class="grid place-items-center text-center">
      <p class="text-xs">
        &copy; Copyright {{ currentYear }} -
        <NuxtLink
          href="https://pedroruviaro.com.br/"
          target="_blank"
          rel="noreferrer"
          class="border-b"
          >pedroruviaro.com.br</NuxtLink
        >
      </p>
    </UContainer>
  </footer>
</template>

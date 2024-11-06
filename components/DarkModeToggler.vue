<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === "dark"
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark"
  },
})
</script>

<template>
  <UButton
    :icon="isDark ? 'i-heroicons-moon' : 'i-heroicons-sun'"
    size="sm"
    color="white"
    square
    variant="ghost"
    @click="isDark = !isDark"
  />
</template>

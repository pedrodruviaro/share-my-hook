<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <UCard>
    <template #header>
      <h2 class="font-bold text-xl md:text-2xl">{{ props.title }}</h2>
    </template>

    <slot />
  </UCard>
</template>

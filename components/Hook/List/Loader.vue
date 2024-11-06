<script setup lang="ts">
const props = defineProps<{
  loading: boolean
}>()
</script>

<template>
  <div v-if="props.loading" class="grid gap-4">
    <USkeleton class="w-full h-32" v-for="i in 4" :key="i" />
  </div>

  <slot v-else />
</template>

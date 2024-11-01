<script setup lang="ts">
const props = defineProps<{
  loading: boolean
}>()
</script>

<template>
  <div class="grid gap-4" v-if="props.loading">
    <USkeleton class="w-full h-32" v-for="i in 4" :key="i" />
  </div>

  <slot v-else />
</template>

<script setup lang="ts">
const props = defineProps<{
  loading: boolean
}>()
</script>

<template>
  <div v-if="props.loading">
    <div class="mb-8">
      <USkeleton class="w-40 mb-2 h-8" />
      <USkeleton class="w-full h-px" />
    </div>

    <div class="grid gap-4">
      <USkeleton class="w-full h-32" v-for="i in 4" :key="i" />
    </div>
  </div>

  <slot v-else />
</template>

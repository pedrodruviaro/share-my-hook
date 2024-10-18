<script setup lang="ts">
const props = defineProps<{
  loading: boolean
}>()
</script>

<template>
  <div class="w-full" v-if="props.loading">
    <USkeleton class="w-full h-20" />
  </div>

  <slot v-else />
</template>

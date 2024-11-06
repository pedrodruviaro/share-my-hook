<script setup lang="ts">
const props = defineProps<{
  loading: boolean
}>()
</script>

<template>
  <div v-if="props.loading">
    <UCard>
      <div class="flex gap-2 flex-wrap justify-between">
        <USkeleton class="w-full max-w-32 h-8" />
        <USkeleton class="w-full max-w-32 h-8" />
      </div>
    </UCard>
  </div>

  <slot v-else />
</template>

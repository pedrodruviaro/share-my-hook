<script setup lang="ts">
const props = defineProps<{
  loading: boolean
}>()
</script>

<template>
  <div v-if="props.loading">
    <div class="grid md:flex gap-2">
      <USkeleton class="w-full h-14" />
      <USkeleton class="w-full h-14" />
    </div>

    <USkeleton class="w-full h-96 mt-8" />
    <USkeleton class="w-full h-[440px] mt-8" />
    <USkeleton class="w-44 h-8 ml-auto mt-8" />
  </div>

  <slot v-else />
</template>

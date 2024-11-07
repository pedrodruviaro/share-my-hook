<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    loading: boolean
    amount?: number
  }>(),
  { amount: 3 }
)
</script>

<template>
  <div class="grid grid-cols-3 gap-4" v-if="props.loading">
    <USkeleton
      v-for="i in props.amount"
      :key="`report-loader-${i}`"
      class="w-full h-24"
    />
  </div>

  <slot v-else />
</template>

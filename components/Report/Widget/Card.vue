<script setup lang="ts">
const props = defineProps<{
  label: string
  value: string | number
}>()
</script>

<template>
  <article
    class="border border-slate-200 dark:border-slate-700 grid place-items-center rounded-lg p-2 md:p-4"
  >
    <div class="text-center grid place-items-center gap-2">
      <h2 class="text-sm md:text-lg">{{ props.label }}</h2>
      <p class="font-black text-xl sm:text-2xl md:text-4xl lg:text-5xl">
        {{ props.value }}
      </p>
    </div>
  </article>
</template>

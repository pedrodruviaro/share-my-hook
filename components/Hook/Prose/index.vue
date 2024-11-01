<script setup lang="ts">
const props = defineProps<{
  html: string | Promise<string>
}>()
</script>

<template>
  <div
    class="prose prose-sm dark:prose-invert w-full max-w-[100%] prose-pre:max-w-[85vw] md:prose-pre:max-w-none"
    v-html="props.html"
  ></div>
</template>

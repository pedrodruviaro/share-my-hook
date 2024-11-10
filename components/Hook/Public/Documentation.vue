<script setup lang="ts">
const props = defineProps<{
  documentation: string
}>()

const parsedDescription = useMarkdown(props.documentation)
</script>

<template>
  <UCard>
    <template #header>
      <h2 class="font-bold text-xl md:text-2xl">Como usar</h2>
    </template>

    <HookProse :html="parsedDescription" />
  </UCard>
</template>

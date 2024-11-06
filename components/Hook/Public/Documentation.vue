<script setup lang="ts">
const props = defineProps<{
  documentation: string
}>()

const parsedDescription = useMarkdown(props.documentation)
</script>

<template>
  <BaseWidget title="Como usar">
    <HookProse :html="parsedDescription" />
  </BaseWidget>
</template>

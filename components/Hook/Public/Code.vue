<script setup lang="ts">
const MONACO_EDITOR_OPTIONS = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
  padding: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },
  fontSize: 15,
}

const props = defineProps<{
  code: string
  lang: string
}>()

const code = computed(() => props.code)
</script>

<template>
  <div class="min-h-[500px]">
    <VueMonacoEditor
      id="editor"
      theme="vs-dark"
      :value="code"
      :options="MONACO_EDITOR_OPTIONS"
      :default-language="props.lang"
      :language="props.lang"
    />
  </div>
</template>

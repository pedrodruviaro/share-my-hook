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

const isPreviewOpen = ref(false)
const previewOptions = computed(() => {
  return {
    icon: isPreviewOpen.value ? "i-heroicons-eye-slash" : "heroicons-eye",
    text: isPreviewOpen.value ? "Fechar visualização" : "Abrir visualização",
  }
})
const togglePreview = () => (isPreviewOpen.value = !isPreviewOpen.value)

// @todo -> move to defineModel
const description = ref("")
const parsedDescription = computed(() => {
  return useMarkdown(description.value)
})
</script>

<template>
  <div class="space-y-8">
    <div class="grid items-center gap-2 md:grid-cols-[2fr_1fr]">
      <UInput class="w-full flex-2" placeholder="Título do hook" />
      <USelect class="w-full flex-1" :options="['javascript', 'typescript']" />
    </div>

    <UCard>
      <template #header>Documentação</template>
      <div class="space-y-2">
        <UButton
          size="xs"
          variant="soft"
          :icon="previewOptions.icon"
          :label="previewOptions.text"
          @click="togglePreview"
        />
        <div
          class="grid gap-2 md:gap-4"
          :class="{ 'md:grid-cols-2': isPreviewOpen }"
        >
          <UTextarea
            placeholder="Uma boa documentação é necessária"
            :rows="12"
            v-model="description"
          />

          <HookProse
            :html="parsedDescription"
            v-show="isPreviewOpen"
            class="border border-slate-800 rounded-lg p-2"
          />
        </div>

        <UBadge color="gray" variant="solid" size="xs"
          >Markdown é suportado</UBadge
        >
      </div>
    </UCard>

    <div>
      <ClientOnly>
        <VueMonacoEditor
          id="editor"
          theme="vs-dark"
          default-language="typescript"
          class="min-h-[400px]"
          language="typescript"
          :options="MONACO_EDITOR_OPTIONS"
        />
      </ClientOnly>
    </div>

    <UButton
      variant="outline"
      label="Criar hook"
      icon="i-heroicons-check"
      trailing
    />
  </div>
</template>

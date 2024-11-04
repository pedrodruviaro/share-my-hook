<script setup lang="ts">
import type { ZodFormattedError } from "zod"
import type { Hook, Languages } from "~/entities/Hook/Hook"

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === "dark")

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

type LanguagesSelect = {
  name: string
  value: Languages
}

const languages: LanguagesSelect[] = [
  {
    name: "TypeScript",
    value: "typescript",
  },
  {
    name: "JavaScript",
    value: "javascript",
  },
]

const props = defineProps<{
  loading: boolean
  errors?: ZodFormattedError<Hook>
}>()

const emits = defineEmits<{
  (e: "create"): void
}>()

const data = defineModel<{
  title: string
  code: string
  documentation: string
  language: "javascript" | "typescript"
  isPublic: boolean
}>({ required: true })

const isPreviewOpen = ref(false)
const previewOptions = computed(() => {
  return {
    icon: isPreviewOpen.value ? "i-heroicons-eye-slash" : "heroicons-eye",
    text: isPreviewOpen.value ? "Fechar visualização" : "Abrir visualização",
  }
})
const togglePreview = () => (isPreviewOpen.value = !isPreviewOpen.value)

const parsedDescription = computed(() => {
  return useMarkdown(data.value.documentation)
})
</script>

<template>
  <div class="space-y-8">
    <div class="grid items-start gap-2 md:grid-cols-[2fr_1fr]">
      <div>
        <UFormGroup label="Título" required>
          <UInput
            class="w-full flex-2"
            placeholder="Título do hook"
            v-model="data.title"
            id="title"
          />
          <UBadge
            color="red"
            size="sm"
            class="mt-2"
            variant="soft"
            v-if="props.errors?.title"
            >{{ props.errors?.title?._errors[0] }}</UBadge
          >
        </UFormGroup>
      </div>
      <div>
        <UFormGroup required label="Linguagem">
          <USelect
            class="w-full flex-1"
            :options="languages"
            option-attribute="name"
            v-model="data.language"
            id="language"
          />

          <UBadge
            color="red"
            size="sm"
            class="mt-2"
            variant="soft"
            v-if="props.errors?.language"
            >{{ props.errors?.language?._errors[0] }}</UBadge
          >
        </UFormGroup>
      </div>

      <UCheckbox v-model="data.isPublic" name="isPublic" label="Hook público" />
    </div>

    <div>
      <ClientOnly>
        <VueMonacoEditor
          id="editor"
          default-language="typescript"
          class="min-h-[400px] border dark:border-zinc-700"
          language="typescript"
          :theme="isDark ? 'vs-dark' : 'vs'"
          :options="MONACO_EDITOR_OPTIONS"
          v-model:value="data.code"
        />
      </ClientOnly>
      <UBadge
        color="red"
        size="sm"
        class="mt-2"
        variant="soft"
        v-if="props.errors?.code"
        >{{ props.errors?.code?._errors[0] }}</UBadge
      >
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
            v-model="data.documentation"
          />

          <HookProse
            :html="parsedDescription"
            v-show="isPreviewOpen"
            class="border border-slate-800 rounded-lg p-2"
          />
        </div>

        <div>
          <UBadge
            color="red"
            size="sm"
            class="mt-2"
            variant="soft"
            v-if="props.errors?.documentation"
            >{{ props.errors?.documentation?._errors[0] }}</UBadge
          >
        </div>

        <UBadge color="gray" variant="solid" size="xs"
          >Markdown é suportado</UBadge
        >
      </div>
    </UCard>

    <UButton
      variant="outline"
      label="Criar hook"
      icon="i-heroicons-check"
      trailing
      @click="emits('create')"
      :loading="props.loading"
    />
  </div>
</template>

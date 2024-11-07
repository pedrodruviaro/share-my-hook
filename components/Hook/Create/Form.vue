<script setup lang="ts">
import { monacoEditorOptions } from "~/constants/monacoEditorOptions"
import type { ZodFormattedError } from "zod"
import type { Hook, Languages } from "~/entities/Hook/Hook"

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

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === "dark")

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

watchEffect(() => {
  const isTypescript = data.value.title.endsWith(".ts")
  const isJavascript = data.value.title.endsWith(".js")

  if (isTypescript) data.value.language = "typescript"
  if (isJavascript) data.value.language = "javascript"
})

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

const isPublic = computed(() => data.value.isPublic)
const isPublicButtonLabel = computed(() => {
  return isPublic.value ? "Criar hook público" : "Criar hook privado"
})
const publicButtonItems = [
  [
    {
      label: "Público",
      icon: "i-heroicons-eye",
      click: () => (data.value.isPublic = true),
    },
    {
      label: "Privado",
      icon: "i-heroicons-eye-slash",
      click: () => (data.value.isPublic = false),
    },
  ],
]
</script>

<template>
  <div class="space-y-8">
    <div class="grid items-start gap-2 md:grid-cols-[2fr_1fr]">
      <div>
        <UFormGroup label="Título (incluindo extensão)" required>
          <UInput
            class="w-full flex-2"
            placeholder="useUser.ts"
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
    </div>

    <div>
      <ClientOnly>
        <VueMonacoEditor
          id="editor"
          default-language="typescript"
          class="min-h-[400px] border dark:border-zinc-700"
          language="typescript"
          :theme="isDark ? 'vs-dark' : 'vs'"
          :options="monacoEditorOptions"
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

    <div class="flex justify-end">
      <UButton
        class="button-create"
        :label="isPublicButtonLabel"
        :loading="props.loading"
        @click="emits('create')"
      />
      <UDropdown
        :items="publicButtonItems"
        :popper="{ placement: 'bottom-start' }"
      >
        <UButton
          trailing-icon="i-heroicons-chevron-down-20-solid"
          class="button-create-select"
          :disabled="props.loading"
        />
      </UDropdown>
    </div>
  </div>
</template>

<style scoped>
.button-create {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  @apply border-r border-zinc-200 dark:border-zinc-700;
}

.button-create-select {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>

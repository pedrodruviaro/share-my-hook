<script setup lang="ts">
import { common, createStarryNight } from "@wooorm/starry-night"
import { toHtml } from "hast-util-to-html"
import "@wooorm/starry-night/style/dark"

const props = defineProps<{
  id: string
  title: string
  code: string
  lang: string
}>()

const emits = defineEmits<{
  (e: "detail", id: string): void
  (e: "wants-edit", id: string): void
}>()

const loading = ref(true)
const htmlCode = ref("")

const registerSyntaxHighlight = async () => {
  loading.value = true

  const starryNight = await createStarryNight(common)
  const scope = starryNight.flagToScope(props.lang)
  const tree = starryNight.highlight(props.code, scope!)

  htmlCode.value = toHtml(tree)
  loading.value = false
}

watch(
  () => props.code,
  () => {
    registerSyntaxHighlight()
  },
  { immediate: true }
)
</script>

<template>
  <article class="space-y-4 p-4 border rounded-lg border-slate-700">
    <UBadge :label="props.lang" color="gray" variant="subtle" />
    <BaseTitle :label="props.title" />

    <!-- @TODO -> Loader -->
    <div class="w-full">
      <pre
        class="text-xs rounded bg-slate-900 p-2 overflow-x-auto overflow-y-auto max-h-[300px]"
        v-html="htmlCode"
      ></pre>
    </div>

    <div class="flex gap-2 flex-wrap">
      <UButton
        label="Editar"
        variant="ghost"
        @click="emits('wants-edit', props.id)"
      />
      <UButton
        label="Ver detalhe"
        variant="soft"
        @click="emits('detail', props.id)"
      />
    </div>
  </article>
</template>

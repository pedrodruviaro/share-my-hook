<script setup lang="ts">
import { common, createStarryNight } from "@wooorm/starry-night"
import { toHtml } from "hast-util-to-html"
import "@/assets/styles/syntax.css"

const props = withDefaults(
  defineProps<{
    code: string
    lang: string
    limitedHeight?: boolean
  }>(),
  {
    limitedHeight: false,
  }
)

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
  <HookSyntaxLoader :loading="loading">
    <ClientOnly>
      <pre
        class="text-xs bg-slate-50 dark:bg-slate-800 p-2 px-4 overflow-x-auto overflow-y-auto rounded-lg"
        :class="{ 'max-h-[300px]': props.limitedHeight }"
        v-html="htmlCode"
      ></pre>
    </ClientOnly>
  </HookSyntaxLoader>
</template>

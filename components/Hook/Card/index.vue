<script setup lang="ts">
const props = defineProps<{
  id: string
  title: string
  code: string
  lang: string
  isOwner: boolean
}>()

const emits = defineEmits<{
  (e: "detail", id: string): void
  (e: "wants-edit", id: string): void
  (e: "share", id: string): void
}>()
</script>

<template>
  <article
    class="space-y-4 p-4 border rounded-lg border-slate-200 dark:border-slate-700"
  >
    <div class="flex gap-2 justify-between">
      <UBadge :label="props.lang" color="gray" variant="subtle" />
      <UButton
        label="Compartilhar"
        variant="ghost"
        icon="i-heroicons-share"
        trailing
        size="sm"
        @click="emits('share', props.id)"
      />
    </div>

    <BaseTitle :label="props.title" />

    <HookSyntaxHighlight
      :code="props.code"
      :lang="props.lang"
      :limited-height="true"
    />

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

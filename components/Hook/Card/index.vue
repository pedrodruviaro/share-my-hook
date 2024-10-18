<script setup lang="ts">
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
</script>

<template>
  <article class="space-y-4 p-4 border rounded-lg border-slate-700">
    <UBadge :label="props.lang" color="gray" variant="subtle" />
    <BaseTitle :label="props.title" />

    <HookSyntaxHighlight
      code="const animal = new Animal()"
      lang="typescript"
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

<script setup lang="ts">
const props = defineProps<{
  title: string
  lang: string
  description: string
  createBy: string
}>()

const emits = defineEmits<{
  (e: "wants-see-creator"): void
}>()

const parsedDescription = useMarkdown(props.description)
</script>

<template>
  <section>
    <div class="space-y-3">
      <UBadge color="gray" variant="solid" size="md">{{ props.lang }}</UBadge>
      <h1 class="font-bold text-2xl md:text-3xl">{{ props.title }}</h1>
      <p class="pb-10">
        Criado por:
        <button
          @click="emits('wants-see-creator')"
          class="text-sky-400 font-semibold"
        >
          @{{ props.createBy }}
        </button>
      </p>

      <BaseWidget title="Documentação">
        <HookProse :html="parsedDescription" />
      </BaseWidget>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  lang: string
  createBy: string
  createdAt: Date
}>()

const emits = defineEmits<{
  (e: "wants-see-creator"): void
}>()

const localizedDate = computed(() => {
  return props.createdAt.toLocaleDateString("pt-BR")
})
</script>

<template>
  <section>
    <div class="space-y-3">
      <UBadge color="gray" variant="solid" size="md">{{ props.lang }}</UBadge>
      <h1 class="font-bold text-2xl md:text-3xl">{{ props.title }}</h1>
      <div class="flex flex-wrap items-center gap-2 justify-between">
        <p>
          Criado por:
          <button
            @click="emits('wants-see-creator')"
            class="text-sky-400 font-semibold hover:opacity-85"
          >
            @{{ props.createBy }}
          </button>
        </p>

        <UBadge size="xs" color="black" variant="subtle">{{
          localizedDate
        }}</UBadge>
      </div>
    </div>
  </section>
</template>

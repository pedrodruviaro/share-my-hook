<script setup lang="ts">
const props = defineProps<{
  avatarUrl: string
  name: string
  username: string
  jobtitle?: string
}>()

const emits = defineEmits<{
  (e: "share-profile"): void
}>()
</script>

<template>
  <section>
    <div
      class="grid gap-2 md:grid-cols-[max-content_1fr] md:items-center md:gap-4"
    >
      <UAvatar :alt="props.name" :src="props.avatarUrl" size="3xl" />
      <div class="flex flex-wrap gap-2 justify-between items-start">
        <div>
          <h1 class="font-bold text-xl md:text-2xl">{{ props.name }}</h1>
          <p class="md:text-lg text-slate-400">@{{ props.username }}</p>
          <p v-if="props.jobtitle">{{ props.jobtitle }}</p>
        </div>

        <UButton
          label="Compartilhar perfil"
          icon="i-heroicons-share"
          trailing
          size="xs"
          color="black"
          @click="emits('share-profile')"
        />
      </div>
    </div>
  </section>
</template>

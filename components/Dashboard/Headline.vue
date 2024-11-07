<script setup lang="ts">
const props = defineProps<{
  avatarUrl: string
  name: string
  username: string
  jobtitle?: string
  website?: string
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

    <div class="grid gap-2 mt-3">
      <p v-if="props.jobtitle" class="text-lg">{{ props.jobtitle }}</p>
      <NuxtLink
        v-if="props.website"
        :to="props.website"
        target="_blank"
        class="text-slate-400 block max-w-max"
      >
        {{ props.website }}
      </NuxtLink>
    </div>
  </section>
</template>

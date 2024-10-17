<script setup lang="ts">
const props = defineProps<{
  avatarUrl: string
  name: string
  username: string
  jobtitle?: string
  website?: string
}>()
</script>

<template>
  <div class="space-y-2">
    <div>
      <UAvatar :alt="props.name" :src="props.avatarUrl" size="3xl" />
      <h1 class="font-bold text-xl">{{ props.name }}</h1>
      <p class="md:text-lg text-slate-400">{{ props.username }}</p>
    </div>

    <p v-if="props.jobtitle">{{ props.jobtitle }}</p>

    <NuxtLink
      v-if="props.website"
      :to="props.website"
      target="_blank"
      class="text-slate-400 block max-w-max"
    >
      {{ props.website }}
    </NuxtLink>
  </div>
</template>

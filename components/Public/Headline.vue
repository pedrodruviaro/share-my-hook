<script setup lang="ts">
const props = defineProps<{
  avatarUrl: string
  name: string
  username: string
  jobtitle?: string
  website?: string
  bio?: string
}>()
</script>

<template>
  <section class="grid gap-4 justify-center text-center items-center">
    <div>
      <UAvatar :alt="props.name" :src="props.avatarUrl" size="3xl" />
      <h1 class="font-bold text-xl">{{ props.name }}</h1>
      <p class="md:text-lg text-slate-400">{{ props.username }}</p>
      <NuxtLink
        v-if="props.website"
        :to="props.website"
        target="_blank"
        class="text-slate-400 block max-w-max mx-auto"
      >
        {{ props.website }}
      </NuxtLink>
    </div>

    <div class="grid gap-2">
      <p v-if="props.jobtitle" class="font-bold text-xl">
        {{ props.jobtitle }}
      </p>
      <p v-if="props.bio" class="max-w-3xl">{{ props.bio }}</p>
    </div>
  </section>
</template>

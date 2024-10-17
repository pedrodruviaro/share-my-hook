<script setup lang="ts">
const props = defineProps<{
  avatarUrl: string
  username: string
  jobtitle?: string
  bio?: string
}>()

const emits = defineEmits<{
  (e: "wants-see-github-profile"): void
}>()
</script>

<template>
  <section class="flex flex-col justify-center gap-2 text-center">
    <div class="rounded-full overflow-hidden w-32 h-32 md:w-40 md:h-40 mx-auto">
      <img :src="props.avatarUrl" :alt="props.username" class="w-full h-full" />
    </div>
    <h1 class="font-bold text-xl md:text-2xl text-sky-400 cursor-pointer">
      <button @click="emits('wants-see-github-profile')">
        @{{ props.username }}
      </button>
    </h1>
    <h2 class="font-regular text-lg md:text-xl" v-if="props.jobtitle">
      {{ props.jobtitle }}
    </h2>
    <p class="md:text-lg mt-2" v-if="props.bio">{{ props.bio }}</p>
  </section>
</template>

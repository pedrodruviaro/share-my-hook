<script setup lang="ts">
definePageMeta({
  layout: "admin",
})

useSeoMeta({
  title: "Crie seu hook",
})
</script>

<template>
  <div class="space-y-6">
    <h1 class="font-bold text-xl md:text-2xl">Crie seu hook</h1>
    <HookCreateForm />
  </div>
</template>

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
    <BaseTitle label="Crie seu hook" />
    <HookCreateForm />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "admin",
})

useSeoMeta({
  title: "Crie seu hook",
})

const userStore = useUserStore()

const { loading, data, errors, create } = useHookCreate({
  user: userStore.user,
})
</script>

<template>
  <div class="space-y-6">
    <BaseTitle label="Crie seu hook" />
    <HookCreateForm :errors :loading v-model="data" @create="create" />
  </div>
</template>

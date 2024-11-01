<script setup lang="ts">
definePageMeta({
  layout: "admin",
})

useSeoMeta({
  title: "Editar perfil",
})

const userStore = useUserStore()
const { loading, errors, infos, edit } = useProfileEdit({
  user: userStore.user,
})
</script>

<template>
  <div class="grid gap-8">
    <BaseTitle label="Edite sua informações" />
    <ProfileEditForm
      @save-profile="edit"
      :loading="loading"
      :errors="errors"
      v-model="infos"
    />
  </div>
</template>

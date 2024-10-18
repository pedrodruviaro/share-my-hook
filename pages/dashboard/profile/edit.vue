<script setup lang="ts">
const handleSaveProfile = () => {
  console.log("* Salvar perfil")
}

definePageMeta({
  layout: "admin",
})

useSeoMeta({
  title: "Editar perfil",
})
</script>

<template>
  <div class="grid gap-8">
    <BaseTitle label="Edite sua informações" />
    <ProfileEditForm @save-profile="handleSaveProfile" />
  </div>
</template>

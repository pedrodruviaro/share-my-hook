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
    <h1 class="font-bold text-xl md:text-2xl">Edite sua informações</h1>

    <ProfileEditForm @save-profile="handleSaveProfile" />
  </div>
</template>

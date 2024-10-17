<script setup lang="ts">
const emits = defineEmits<{
  (e: "save-profile"): void
}>()
</script>

<template>
  <form class="space-y-2" @submit.prevent="emits('save-profile')">
    <div class="grid gap-2 md:grid-cols-2">
      <UFormGroup label="Nome" required>
        <UInput placeholder="John Doe" icon="i-heroicons-user" />
      </UFormGroup>

      <UFormGroup label="Cargo">
        <UInput
          placeholder="Fullstack Developer @ GitHub"
          icon="i-heroicons-briefcase"
        />
      </UFormGroup>
    </div>

    <UFormGroup label="Webiste">
      <UInput
        placeholder="http://www.johndoe.io"
        icon="i-heroicons-globe-alt"
      />
    </UFormGroup>

    <UFormGroup label="Fale um pouco sobre você">
      <UTextarea :rows="6" />
    </UFormGroup>

    <UButton
      type="submit"
      label="Salvar"
      icon="i-heroicons-check"
      variant="outline"
    />
  </form>
</template>

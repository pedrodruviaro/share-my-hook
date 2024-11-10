<script setup lang="ts">
const props = defineProps<{
  loading: boolean
  isLogged: boolean
}>()

const emits = defineEmits<{
  (e: "login-with-github"): void
  (e: "login-as-guest"): void
}>()
</script>

<template>
  <UCard>
    <BaseTitle label="Bem vindo!" center size="md" class="mb-4" />

    <div class="my-6">
      <UDivider icon="i-simple-icons-github" />
    </div>

    <BaseTitle
      label="Entre com sua conta do GitHub"
      size="xs"
      center
      class="mb-4"
    />

    <div class="flex justify-center">
      <UButton
        label="Entrar agora"
        color="white"
        variant="solid"
        size="lg"
        block
        :loading="props.loading"
        :disabled="props.isLogged"
        @click="emits('login-with-github')"
      />
    </div>
  </UCard>
</template>

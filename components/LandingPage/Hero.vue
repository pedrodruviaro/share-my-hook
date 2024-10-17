<script setup lang="ts">
const emits = defineEmits<{
  (e: "wants-login-with-github"): void
}>()
</script>

<template>
  <section>
    <UContainer>
      <div class="flex justify-center mb-4">
        <UBadge
          size="sm"
          :ui="{ rounded: 'rounded-full' }"
          color="gray"
          variant="solid"
          >JavaScript / TypeScript</UBadge
        >
      </div>
      <h1 class="text-center text-balance font-bold text-2xl md:text-4xl mb-4">
        Compartilhe seus hooks de forma fácil
      </h1>
      <p class="text-center text-balance font-semibold text-lg md:xl mb-8">
        Compartilhe e descubra hooks personalizados para acelerar o seu
        desenvolvimento
      </p>

      <div class="flex justify-center">
        <UButton
          label="Comece agora"
          icon="i-heroicons-arrow-long-right-20-solid"
          trailing
          size="lg"
          @click="emits('wants-login-with-github')"
        />
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const { loading, login } = useAuthActions()

useSeoMeta({
  title: "Login",
})
</script>

<template>
  <BaseLayoutWrapper>
    <UContainer>
      <div class="w-full max-w-[400px] flex justify-center mx-auto">
        <UCard>
          <BaseTitle label="Entre com sua conta do GitHub" size="md" />

          <div class="my-6">
            <UDivider icon="i-simple-icons-github" />
          </div>
          <div class="flex justify-center">
            <UButton
              label="Login com o GitHub"
              color="white"
              variant="solid"
              size="lg"
              :loading="loading"
              @click="login"
            />
          </div>
        </UCard>
      </div>
    </UContainer>
  </BaseLayoutWrapper>
</template>

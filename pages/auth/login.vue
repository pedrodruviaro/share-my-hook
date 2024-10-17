<script setup lang="ts">
const loading = ref(false)

const handleLoginWithGitHub = () => {
  loading.value = true
  console.log("* Wants to login!")
}

useSeoMeta({
  title: "Login",
})
</script>

<template>
  <BasePageWrapper>
    <UContainer>
      <div class="w-full max-w-[400px] flex justify-center mx-auto">
        <UCard>
          <h1 class="font-semibold text-xl text-center">
            Entre com sua conta do GitHub
          </h1>
          <div class="my-6">
            <UDivider icon="i-simple-icons-github" />
          </div>
          <div class="flex justify-center">
            <UButton
              label="Login com o GitHub"
              color="white"
              variant="solid"
              size="lg"
              :loading
              @click="handleLoginWithGitHub"
            />
          </div>
        </UCard>
      </div>
    </UContainer>
  </BasePageWrapper>
</template>

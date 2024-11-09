<script setup lang="ts">
definePageMeta({
  layout: false,
})

useSeoMeta({
  title: "Entrar",
})

const { loading, login: loginWithGithub } = useAuthActions()

const { isLogged } = storeToRefs(useUserStore())
const router = useRouter()

onMounted(() => {
  if (isLogged.value) {
    router.push("/dashboard")
  }
})
</script>

<template>
  <BaseLayoutWrapper>
    <UContainer>
      <div class="w-full max-w-[400px] flex justify-center mx-auto">
        <AuthLoginForm
          :loading
          :isLogged="false"
          @login-with-github="loginWithGithub"
        />
      </div>
    </UContainer>
  </BaseLayoutWrapper>
</template>

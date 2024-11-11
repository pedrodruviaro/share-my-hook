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
  if (isLogged.value) router.push("/dashboard")
})
</script>

<template>
  <BaseLayoutWrapper>
    <template #header>
      <header class="py-4 border-b border-slate-200 dark:border-slate-700">
        <UContainer>
          <div class="flex flex-wrap gap-2 justify-between">
            <Logo />
            <DarkModeToggler />
          </div>
        </UContainer>
      </header>
    </template>

    <UContainer>
      <div
        class="w-full max-w-[400px] flex justify-center mx-auto pt-10 lg:pt-20"
      >
        <AuthLoginForm
          :loading
          :isLogged="false"
          @login-with-github="loginWithGithub"
        />
      </div>
    </UContainer>
  </BaseLayoutWrapper>
</template>

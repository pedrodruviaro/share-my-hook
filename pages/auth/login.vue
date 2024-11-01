<script setup lang="ts">
const { loading, login } = useAuthActions()

useSeoMeta({
  title: "Login",
})

const router = useRouter()
const userStore = useUserStore()
const user = useSupabaseUser()
const isLogged = computed(() => {
  return userStore.isUserLoaded || user.value?.id !== ""
})

onMounted(() => {
  if (!isLogged.value) return
  router.push("/dashboard")
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
              :disabled="isLogged"
              @click="login"
            />
          </div>
        </UCard>
      </div>
    </UContainer>
  </BaseLayoutWrapper>
</template>

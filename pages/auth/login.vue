<script setup lang="ts">
const loading = ref(false)

const supabase = useSupabaseClient()
const config = useRuntimeConfig()

const handleLoginWithGitHub = async () => {
  try {
    loading.value = true

    const response = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${config.public.siteUrl}/auth/redirect`,
      },
    })

    console.log(response)
  } catch (error) {
    console.log("error =>", error)
  } finally {
    loading.value = false
  }
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
              :loading
              @click="handleLoginWithGitHub"
            />
          </div>
        </UCard>
      </div>
    </UContainer>
  </BasePageWrapper>
</template>

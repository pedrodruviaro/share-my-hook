<script setup lang="ts">
const TIMEOUT = 3_000

const toast = useToast()
const router = useRouter()

onMounted(() => {
  toast.add({
    title: "Redirecionando...",
    description: "Estamos deixando tudo pronto",
    timeout: TIMEOUT,
  })

  setTimeout(() => {
    router.push("/dashboard")
  }, TIMEOUT)
})

useSeoMeta({
  title: "Redirecionando...",
})
</script>

<template>
  <BasePageWrapper>
    <template #header>
      <USkeleton class="w-full py-8" />
    </template>
    <UContainer>
      <div class="grid gap-2 md:grid-cols-[1fr_2fr]">
        <USkeleton class="w-full h-40" />
        <USkeleton class="w-full h-40" />
      </div>
      <div class="grid gap-4 md:grid-cols-2 mt-10">
        <USkeleton class="w-full h-20" v-for="i in 4" :key="i" />
      </div>
    </UContainer>
  </BasePageWrapper>
</template>

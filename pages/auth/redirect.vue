<script setup lang="ts">
const DEFAULT_TIMEOUT = 1_500
const router = useRouter()

onMounted(() => {
  setTimeout(() => {
    router.push("/dashboard")
  }, DEFAULT_TIMEOUT)
})

useSeoMeta({
  title: "Redirecionando...",
})
</script>

<template>
  <AuthRedirectSkeleton />
</template>

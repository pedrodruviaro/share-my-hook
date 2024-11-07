<script setup lang="ts">
const router = useRouter()

onMounted(() => router.push("/dashboard"))

useSeoMeta({
  title: "Redirecionando...",
})

definePageMeta({
  layout: false,
})
</script>

<template>
  <AuthRedirectSkeleton />
</template>

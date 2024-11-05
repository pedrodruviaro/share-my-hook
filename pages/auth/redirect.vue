<script setup lang="ts">
const router = useRouter()

onMounted(() => router.push("/dashboard"))

useSeoMeta({
  title: "Redirecionando...",
})
</script>

<template>
  <AuthRedirectSkeleton />
</template>

<script setup lang="ts">
definePageMeta({
  layout: "public",
})

const route = useRoute()
const username = computed(() => route.params.id)

const client = useSupabaseClient()

onMounted(async () => {
  const resp1 = await client
    .from("hooks")
    .select("*, profiles!inner( id, username )")
    .match({ "profiles.username": username.value, is_public: true })

  console.log(resp1.data)
})
</script>

<template>
  <div>Public profile for: {{ username }}</div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "public",
})

const route = useRoute()
const username = computed(() => route.params.username as string)

const services = useServices()

const { data, error } = await useAsyncData("hooks-profile", async () => {
  const result = await services.hooks.readAllPublicProfile(username.value)
  return result
})

if (error.value) {
  throw createError({
    status: 404,
    message: "Usuário não encontrado",
    fatal: true,
  })
}

useSeoMeta({
  title: data.value?.profile.name || "",
  description: `Hooks compartilhados por ${
    data.value?.profile.name || "usuário"
  }`,
})
</script>

<template>
  <PublicHeadline
    v-if="data?.profile"
    :avatarUrl="data.profile.avatarUrl"
    :name="data.profile.name"
    :username="data.profile.username"
    :jobtitle="data.profile.jobtitle"
    :website="data.profile.site"
    :bio="data.profile.bio"
    class="mb-10"
  />

  <HookList :label="`Hooks de ${username}`" v-if="data?.hooks">
    <HookCard
      v-for="hook in data.hooks"
      :key="hook.id"
      :id="hook.id"
      :title="hook.title"
      :code="hook.code"
      :lang="hook.language"
      :isOwner="false"
    />
  </HookList>

  <UBadge
    v-else
    size="lg"
    color="black"
    variant="subtle"
    class="max-w-max mx-auto block mt-4"
    >Esse usuário ainda não compartilhou nenhum hook</UBadge
  >
</template>

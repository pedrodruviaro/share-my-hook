<script setup lang="ts">
definePageMeta({
  layout: "public",
})

const route = useRoute()
const hookId = computed(() => route.params.id as string)
const services = useServices()

const { data } = await useAsyncData("hook-public", async () => {
  return await services.hooks.readOnePublic(hookId.value)
})

if (!data.value) {
  throw createError({
    status: 404,
    message: "Hook não encontrado",
    fatal: true,
  })
}
useSeoMeta({
  title: data.value?.title,
  description: data.value?.title,
})

const router = useRouter()

const navigateToCreatorProfile = () => {
  router.push(`/users/${data.value?.profiles.username}`)
}
</script>

<template>
  <div class="grid gap-10 w-full" v-if="data">
    <HookPublicHeadline
      :createBy="data.profiles.username"
      :title="data.title"
      :lang="data.language"
      :createdAt="data.createdAt"
      @wants-see-creator="navigateToCreatorProfile"
    />

    <ClientOnly>
      <HookSyntaxHighlight :code="data.code" :lang="data.language" />
    </ClientOnly>

    <HookPublicDocumentation :documentation="data.documentation" />
  </div>
</template>

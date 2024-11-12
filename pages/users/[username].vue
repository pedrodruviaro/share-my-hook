<script setup lang="ts">
definePageMeta({
  layout: "public",
})

const route = useRoute()
const username = computed(() => route.params.username as string)

const { share } = useShareLink()
const handleShare = async () => {
  await share(
    `users/${username.value}`,
    "Perfil do shareMyHook",
    "Veja esse perfil do criador"
  )
}

const services = useServices()
const { data: profile, error } = await useAsyncData(
  "public-profile",
  async () => {
    return await services.profiles.getPublicProfile(username.value)
  }
)

if (error.value || !profile.value) {
  throw createError({
    status: 404,
    message: "Usuário não encontrado",
    fatal: true,
  })
}

useSeoMeta({
  title: profile.value.name || "",
  description: `Hooks compartilhados por ${profile.value.name || "usuário"}`,
})

const {
  getHooks,
  hooks,
  loading: loadingHooks,
  page,
  pageSize,
  totalHooksFromDB,
} = useHookList({ userId: profile.value.id, perPage: 10 })

onMounted(() => getHooks("desc", "public"))

const { y } = useWindowScroll()
const router = useRouter()
const pageFromRoute = Number(route.query.page || 1)
page.value = pageFromRoute

watch(
  () => page.value,
  async () => {
    router.replace({
      path: `/users/${profile.value?.username}`,
      query: { page: page.value.toString() },
    })
    y.value = 100

    getHooks("desc", "public")
  }
)
</script>

<template>
  <PublicHeadline
    v-if="profile"
    class="mb-10"
    :avatarUrl="profile.avatarUrl"
    :name="profile.name"
    :username="profile.username"
    :jobtitle="profile.jobtitle"
    :website="profile.site"
    :bio="profile.bio"
    @share-profile="handleShare"
  />

  <HookListHeadline
    :label="`Hooks de @${profile?.username}`"
    :count="totalHooksFromDB"
  />

  <HookListLoader :loading="loadingHooks">
    <HookList v-if="hooks && hooks.length > 0">
      <HookCard
        v-for="hook in hooks"
        :key="hook.id"
        :id="hook.id"
        :title="hook.title"
        :code="hook.code"
        :lang="hook.language"
        :createdAt="hook.createdAt"
        :isOwner="false"
        :isPublic="true"
      />
    </HookList>

    <UBadge
      v-else
      size="lg"
      color="black"
      variant="subtle"
      class="max-w-max mx-auto block mt-4"
      >Sem hooks para exibir por aqui</UBadge
    >
  </HookListLoader>

  <div class="mt-10">
    <UPagination
      v-if="hooks.length > 0"
      v-model="page"
      :page-count="pageSize"
      :total="totalHooksFromDB"
    />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "admin",
})

const router = useRouter()

const handleNavigateToHookDetail = (id: string) => {
  router.push(`/hook/${id}`)
}

const handleNavigateToHookEdit = (id: string) => {
  router.push(`/dashboard/hook/edit/${id}`)
}

const handleShare = (id: string) => {
  console.log("* Share -> ", id)
}

const userStore = useUserStore()

const {
  loading: loadingHooks,
  hooks,
  hooksCount,
  getHooks,
} = useHookList({ userId: userStore.user?.id })

onMounted(() => getHooks())
</script>

<template>
  <div class="grid gap-10 md:gap-4 md:grid-cols-[1fr_2fr] md:items-start">
    <DashboardProfile
      v-if="userStore.user"
      :avatarUrl="userStore.user?.avatarUrl"
      :name="userStore.user.name"
      :username="userStore.user?.username"
      :jobtitle="userStore.user?.jobtitle"
      :website="userStore.user?.site"
      class="md:sticky md:top-8"
    />

    <div>
      <div class="mb-8">
        <p
          class="flex items-center gap-2 max-w-max border-b-[3px] border-sky-400 pr-3 pb-2 relative"
        >
          <UIcon name="i-heroicons-chevron-up-down" class="w-5 h-5" />
          Meus hooks
          <UBadge
            :ui="{ rounded: 'rounded-full' }"
            color="white"
            variant="solid"
            >{{ hooksCount }}</UBadge
          >
        </p>
        <UDivider class="-mt-[1.5px]" />
      </div>

      <HookListLoader :loading="loadingHooks">
        <HookList>
          <HookCard
            v-for="hook in hooks"
            :key="hook.id"
            :id="hook.id"
            :title="hook.title"
            :code="hook.code"
            :lang="hook.language"
            @detail="handleNavigateToHookDetail"
            @wants-edit="handleNavigateToHookEdit"
            @share="handleShare"
          />
        </HookList>
      </HookListLoader>
    </div>
  </div>
</template>

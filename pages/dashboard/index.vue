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
  <div class="space-y-10">
    <div class="grid gap-4 md:grid-cols-2">
      <DashboardProfile
        v-if="userStore.user"
        :avatarUrl="userStore.user?.avatarUrl"
        :name="userStore.user.name"
        :username="userStore.user?.username"
        :jobtitle="userStore.user?.jobtitle"
        :website="userStore.user?.site"
      />

      <!-- <UCard>
        <p>TOTAL HOOKS</p>
        <p>TOTAL PUBLIC</p>
        <p>TOTAL PRIVATE</p>
        <p>MEMBER SINCE</p>
      </UCard> -->
    </div>

    <HookListLoader :loading="loadingHooks">
      <HookList label="Meus hooks" :count="hooksCount">
        <HookCard
          v-for="hook in hooks"
          :key="hook.id"
          :id="hook.id"
          :title="hook.title"
          :code="hook.code"
          :lang="hook.language"
          :isOwner="true"
          @detail="handleNavigateToHookDetail"
          @wants-edit="handleNavigateToHookEdit"
          @share="handleShare"
        />
      </HookList>
    </HookListLoader>
  </div>
</template>

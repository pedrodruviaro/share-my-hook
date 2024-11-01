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

const userStore = useUserStore()
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
            >7</UBadge
          >
        </p>
        <UDivider class="-mt-[1.5px]" />
      </div>

      <HookListLoader :loading="false">
        <HookList>
          <HookCard
            v-for="i in 4"
            :key="i"
            id="123"
            title="useUser.ts"
            code="const user = new User()"
            lang="typescript"
            @detail="handleNavigateToHookDetail"
            @wants-edit="handleNavigateToHookEdit"
          />
        </HookList>
      </HookListLoader>
    </div>
  </div>
</template>

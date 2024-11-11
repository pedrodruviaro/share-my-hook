<script setup lang="ts">
import type { QueryOrder, QueryStatus } from "~/services/hooks/types"

useSeoMeta({
  title: "Dashboard",
})

definePageMeta({
  layout: "admin",
})

const userStore = useUserStore()

const {
  loading: loadingReports,
  reports,
  getReports,
} = useMyselfReports({
  user: userStore.user,
})

const {
  loading: loadingHooks,
  hooks,
  getHooks,
} = useHookList({ userId: userStore.user?.id })

const hasHooks = computed(() => hooks.value.length > 0)

onMounted(async () => {
  await Promise.all([getHooks("desc"), getReports()])
})

type StatusOption = {
  label: string
  value: QueryStatus
}

const status: StatusOption[] = [
  {
    label: "Todos",
    value: "all",
  },
  {
    label: "Públicos",
    value: "public",
  },
  {
    label: "Privados",
    value: "private",
  },
]
const selectedStatus = ref(status[0].value)

type DateOption = {
  label: string
  value: QueryOrder
}

const dateOrders: DateOption[] = [
  {
    label: "Mais novos",
    value: "desc",
  },
  {
    label: "Mais antigos",
    value: "asc",
  },
]

const selectedDateOrder = ref(dateOrders[0].value)

const handleGetFilteredHooks = async () => {
  await getHooks(selectedDateOrder.value, selectedStatus.value)
}

const router = useRouter()

const handleNavigateToHookEdit = (id: string) => {
  router.push(`/dashboard/hook/edit/${id}`)
}

const { share } = useShareLink()
const handleShare = async () => {
  await share(
    `users/${userStore.user?.username}`,
    "Perfil do shareMyHook",
    "Veja esse perfil do criador"
  )
}
</script>

<template>
  <div class="space-y-10">
    <DashboardHeadline
      v-if="userStore.user"
      :avatarUrl="userStore.user?.avatarUrl"
      :name="userStore.user.name"
      :username="userStore.user?.username"
      :jobtitle="userStore.user?.jobtitle"
      @share-profile="handleShare"
    />

    <ReportWidgetLoader :loading="loadingReports">
      <ReportWidgetList v-if="reports">
        <ReportWidgetCard label="Todos" :value="reports.total" />
        <ReportWidgetCard label="Públicos" :value="reports.public" />
        <ReportWidgetCard label="Privados" :value="reports.private" />
      </ReportWidgetList>
    </ReportWidgetLoader>

    <HookListHeadline label="Meus hooks">
      <template #actions>
        <div class="flex gap-2 pb-2">
          <USelectMenu
            v-model="selectedStatus"
            value-attribute="value"
            option-attribute="label"
            :options="status"
            :disabled="loadingHooks || !hasHooks"
            @change="handleGetFilteredHooks"
          />
          <USelectMenu
            v-model="selectedDateOrder"
            value-attribute="value"
            option-attribute="label"
            :options="dateOrders"
            :disabled="loadingHooks || !hasHooks"
            @change="handleGetFilteredHooks"
          />
        </div>
      </template>
    </HookListHeadline>

    <HookListLoader :loading="loadingHooks">
      <HookList label="Meus hooks" v-if="hasHooks">
        <HookCard
          v-for="hook in hooks"
          :key="hook.id"
          :id="hook.id"
          :title="hook.title"
          :code="hook.code"
          :lang="hook.language"
          :createdAt="hook.createdAt"
          :isOwner="true"
          :isPublic="hook.isPublic"
          @wants-edit="handleNavigateToHookEdit"
        />
      </HookList>

      <HookListEmpty class="pt-4" v-else />
    </HookListLoader>
  </div>
</template>

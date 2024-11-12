import type { Hook } from "~/entities/Hook/Hook"
import type { QueryOrder, QueryStatus } from "~/services/hooks/types"

interface UseHookListOptions {
  userId: string | undefined
  perPage?: number
}

export function useHookList({ userId, perPage }: UseHookListOptions) {
  const services = useServices()

  const loading = ref(true)
  const hooks = ref<Hook[]>([])
  const totalHooksFromDB = ref(0)

  const page = ref(1)
  const pageSize = ref(perPage ?? 5)

  const getHooks = async (
    order: QueryOrder = "asc",
    status: QueryStatus = "all"
  ) => {
    if (!userId) return

    try {
      loading.value = true

      const response = await services.hooks.readAll({
        userId,
        order,
        status,
        page: page.value,
        pageSize: pageSize.value,
      })

      if (!response.hooks) return

      hooks.value = response.hooks
      totalHooksFromDB.value = response.count
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    hooks,
    page,
    totalHooksFromDB,
    pageSize,
    getHooks,
  }
}

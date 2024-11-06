import type { Hook } from "~/entities/Hook/Hook"
import type { QueryOrder, QueryStatus } from "~/services/hooks/types"

interface UseHookListOptions {
  userId: string | undefined
}

export function useHookList({ userId }: UseHookListOptions) {
  const services = useServices()

  const loading = ref(true)
  const hooks = ref<Hook[]>([])

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
      })
      if (!response) return

      hooks.value = response
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    hooks,
    getHooks,
  }
}

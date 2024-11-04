import type { Hook } from "~/entities/Hook/Hook"

interface UseHookListOptions {
  userId: string | undefined
  isPublic?: boolean
}

export function useHookList({ userId, isPublic }: UseHookListOptions) {
  const services = useServices()

  const loading = ref(false)
  const hooks = ref<Hook[]>([])
  const hooksCount = ref(0)

  const getHooks = async () => {
    if (!userId) return

    try {
      loading.value = true

      const response = await services.hooks.readAll(userId)
      if (!response.data || !response.count) return

      hooks.value = response.data
      hooksCount.value = response.count
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    hooks,
    hooksCount,
    getHooks,
  }
}

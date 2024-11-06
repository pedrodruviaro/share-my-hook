import type { Hook } from "~/entities/Hook/Hook"
import type { User } from "~/entities/User/User"

interface UseHookOptions {
  user: User | undefined
  hookId: string
}

export function useHook({ user, hookId }: UseHookOptions) {
  const services = useServices()

  const loading = ref(true)
  const hook = ref<Hook>()

  const getById = async () => {
    if (!user) return

    try {
      loading.value = true

      const response = await services.hooks.readOneByUser({
        id: hookId,
        userId: user.id,
      })

      if (!response) return

      hook.value = response
    } catch (error) {
    } finally {
      loading.value = false
    }
  }

  onMounted(() => getById())

  return {
    loading,
    hook,
  }
}

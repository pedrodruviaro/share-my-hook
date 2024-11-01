import type { User } from "~/entities/User/User"

export function useMyself(userId: string | undefined) {
  const services = useServices()

  const loading = ref(false)
  const user = ref<User>()

  const getUser = async () => {
    if (!userId) return

    try {
      loading.value = true
      const response = await services.profiles.getMyself(userId)

      if (!response) return

      user.value = response
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    user,
    getUser,
  }
}

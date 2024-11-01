export function useAuthActions() {
  const services = useServices()
  const userStore = useUserStore()

  const loading = ref(false)

  const login = async () => {
    try {
      loading.value = true
      await services.auth.signInWithGitHub()
    } catch (error) {
      console.log("error -> ", error)
    } finally {
      loading.value = false
    }
  }

  const logout = async () => {
    try {
      loading.value = true
      await services.auth.logout()
      userStore.resetUser()
    } catch (error) {
      console.log("error -> ", error)
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    login,
    logout,
  }
}

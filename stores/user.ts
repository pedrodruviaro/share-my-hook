export const useUserStore = defineStore("user", () => {
  const supabaseUser = useSupabaseUser()

  const { getUser, user, loading } = useMyself(supabaseUser.value?.id)

  const isUserLoaded = ref(false)

  const loadUser = async () => {
    try {
      if (!isUserLoaded.value) {
        await getUser()
        isUserLoaded.value = true
      }
    } catch (error) {
      console.error(error)
    }
  }

  const resetUser = () => {
    user.value = undefined
    isUserLoaded.value = false
  }

  return { user, loading, loadUser, resetUser }
})

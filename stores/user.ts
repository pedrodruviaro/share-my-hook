import type { UserInfos } from "~/entities/User/Infos"

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

  const updateUserInfos = (infos: UserInfos) => {
    if (!user.value) return

    user.value.name = infos.name
    user.value.site = infos.site
    user.value.bio = infos.bio
    user.value.jobtitle = infos?.jobtitle
  }

  return { user, loading, loadUser, resetUser, updateUserInfos }
})

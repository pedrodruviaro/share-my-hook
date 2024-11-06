import type { Hook } from "~/entities/Hook/Hook"
import type { User } from "~/entities/User/User"

interface UseHookRemoveOptions {
  user: User | undefined
  hook: Ref<Hook | undefined>
}

export function useHookRemove({ user, hook }: UseHookRemoveOptions) {
  const services = useServices()
  const toast = useToast()
  const router = useRouter()

  const loading = ref(false)
  const hookId = ref()

  watchEffect(() => {
    if (!hook.value) return
    hookId.value = hook.value.id
  })

  const remove = async () => {
    if (!user || !hookId.value) return

    try {
      loading.value = true

      await services.hooks.removeOne({ id: hookId.value, userId: user.id })

      router.push("/dashboard")
    } catch (error) {
      console.error(error)
      toast.add({
        title: "Algo falhou",
        description: "Tente remover novamente",
        timeout: 2000,
        color: "red",
      })
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    remove,
  }
}

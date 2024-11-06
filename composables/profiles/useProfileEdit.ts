import { z, type ZodFormattedError } from "zod"
import type { UserInfos } from "~/entities/User/Infos"
import type { User } from "~/entities/User/User"

const schema = z.object({
  name: z
    .string()
    .max(50, "O campo tem um máximo de 30 caracteres")
    .min(2, "Insira um nome com pelo menos 2 caracteres"),
  jobtitle: z
    .string()
    .max(100, "O campo tem um máximo de 50 caracteres")
    .optional(),
  site: z.union([
    z.literal(""),
    z.string().trim().url("Insira uma url válida"),
  ]),
  bio: z
    .string()
    .max(400, "O campo tem um máximo de 400 caracteres")
    .optional(),
})

interface UseProfileEditOptions {
  user: User | undefined
}

export function useProfileEdit({ user }: UseProfileEditOptions) {
  const services = useServices()
  const toast = useToast()
  const userStore = useUserStore()

  const userId = ref("")
  const infos = ref<UserInfos>({
    name: "",
    jobtitle: "",
    bio: "",
    site: "",
  })

  watchEffect(() => {
    if (!user) return
    userId.value = user?.id
    infos.value.name = user.name
    infos.value.bio = user.bio ?? ""
    infos.value.jobtitle = user.jobtitle ?? ""
    infos.value.site = user.site ?? ""
  })

  const loading = ref(false)
  const errors = ref<ZodFormattedError<UserInfos>>()

  const edit = async () => {
    if (!userId.value) return

    const result = schema.safeParse(infos.value)
    if (!result.success) {
      errors.value = result.error.format()
      return
    }

    try {
      loading.value = true

      const response = await services.profiles.edit(userId.value, {
        ...infos.value,
      })

      if (!response) return

      toast.add({
        title: "Perfil atualizado",
        timeout: 2000,
        color: "green",
      })

      userStore.updateUserInfos({ ...infos.value })
      errors.value = undefined
    } catch (error) {
      toast.add({
        title: "Falha ao atualizar perfil",
        description: "Tente novamente",
        timeout: 2000,
        color: "red",
      })
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    errors,
    infos,
    edit,
  }
}

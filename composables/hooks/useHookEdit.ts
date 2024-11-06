import { z, type ZodFormattedError } from "zod"
import type { Hook, Languages } from "~/entities/Hook/Hook"
import type { User } from "~/entities/User/User"

interface UseHookEditOptions {
  user: User | undefined
  hook: Ref<Hook | undefined>
}

const schema = z.object({
  code: z.string().min(2, "Insira o código do hook"),
  documentation: z.string().min(10, "Insira uma documentação útil"),
  isPublic: z.boolean().default(true),
  language: z.enum(["typescript", "javascript"]),
  title: z.string().min(2, "Insira um título"),
})

export function useHookEdit({ user, hook }: UseHookEditOptions) {
  const services = useServices()
  const toast = useToast()
  const router = useRouter()

  const loading = ref(false)
  const errors = ref<ZodFormattedError<Hook>>()
  const data = ref({
    code: "",
    documentation: "",
    isPublic: true,
    language: "typescript" as Languages,
    title: "",
  })

  watchEffect(() => {
    if (!hook.value) return

    data.value.code = hook.value.code
    data.value.documentation = hook.value.documentation
    data.value.isPublic = hook.value.isPublic
    data.value.language = hook.value.language
    data.value.title = hook.value.title
  })

  const edit = async () => {
    if (!user || !hook.value) return

    const isValid = schema.safeParse({ ...data.value })
    if (!isValid.success) {
      errors.value = isValid.error.format()
      return
    }

    try {
      loading.value = true

      const response = await services.hooks.edit(user.id, {
        id: hook.value.id,
        ...data.value,
      })

      if (!response.id) return

      toast.add({
        title: "Suceso",
        description: "Hook editado",
        timeout: 2000,
        color: "green",
        callback: () => router.push("/dashboard"),
      })

      errors.value = undefined
      data.value.code = ""
      data.value.documentation = ""
      data.value.isPublic = true
      data.value.language = "typescript"
      data.value.title = ""
    } catch (error) {
      console.error(error)
      toast.add({
        title: "Algo falhou",
        description: "Tente editar novamente",
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
    data,
    edit,
  }
}

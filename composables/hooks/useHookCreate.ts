import { z, type ZodFormattedError } from "zod"
import type { Hook, Languages } from "~/entities/Hook/Hook"
import type { User } from "~/entities/User/User"

interface UseHookCreateOptions {
  user: User | undefined
}

const schema = z.object({
  code: z.string().min(2, "Insira o código do hook"),
  documentation: z.string().min(10, "Insira uma documentação útil"),
  isPublic: z.boolean().default(true),
  language: z.enum(["typescript", "javascript"]),
  title: z.string().min(2, "Insira um título"),
})

export function useHookCreate({ user }: UseHookCreateOptions) {
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

  const create = async () => {
    if (!user) return

    const isValid = schema.safeParse({ ...data.value })
    if (!isValid.success) {
      errors.value = isValid.error.format()
      return
    }

    try {
      loading.value = true

      await services.hooks.create(user.id, { ...data.value })

      toast.add({
        title: "Suceso",
        description: "Hook criado",
        timeout: 2000,
        color: "green",
      })

      router.push("/dashboard")
    } catch (error) {
      console.error(error)
      toast.add({
        title: "Algo falhou",
        description: "Tente criar novamente",
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
    create,
  }
}

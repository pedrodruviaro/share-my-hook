import type { Hook, Languages } from "~/entities/Hook/Hook"
import type { Database } from "~/supabase/types"

export type CreateOptions = {
  title: string
  code: string
  documentation: string
  language: Languages
  isPublic: boolean
}

export type EditOptions = Partial<Hook>

export type ReadAllRow = Database["public"]["Tables"]["hooks"]["Row"]

export type ReadOneByUserOptions = {
  id: string
  userId: string
}

import type { Hook, Languages } from "~/entities/Hook/Hook"
import type { User } from "~/entities/User/User"
import type { Database } from "~/supabase/types"
import type { ProfileRow } from "../profiles/types"

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

export type ReadAllPublicProfile = Omit<
  ReadAllRow,
  "profile_id" | "is_public"
> & {
  profiles: Omit<ProfileRow, "id">
}

export type ReadOnePublic = Omit<ReadAllRow, "profile_id" | "is_public"> & {
  profiles: Pick<ProfileRow, "username">
}

export type RemoveOneOptions = {
  id: string
  userId: string
}

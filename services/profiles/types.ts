import type { User } from "~/entities/User/User"
import type { Database } from "~/supabase/types"

export type ProfileRow = Database["public"]["Tables"]["profiles"]["Row"]

export type EditOptions = Partial<User>

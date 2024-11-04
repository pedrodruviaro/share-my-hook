import { v4 as uuidv4 } from "uuid"
import type { SupabaseClient } from "@supabase/supabase-js"
import type { Database } from "~/supabase/types"
import type { CreateOptions } from "./types"

export default (client: SupabaseClient<Database>) => ({
  async create(
    userId: string,
    { code, documentation, isPublic, language, title }: CreateOptions
  ) {
    const id = uuidv4()

    const { data } = await client
      .from("hooks")
      .insert({
        code,
        documentation,
        is_public: isPublic,
        language,
        title,
        id,
        profile_id: userId,
      })
    return data
  },
})

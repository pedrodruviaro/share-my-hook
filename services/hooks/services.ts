import { v4 as uuidv4 } from "uuid"
import type { SupabaseClient } from "@supabase/supabase-js"
import type { Database } from "~/supabase/types"
import type { CreateOptions, ReadAllRow } from "./types"
import { readAllAdapater } from "./adapters"

export default (client: SupabaseClient<Database>) => ({
  async create(
    userId: string,
    { code, documentation, isPublic, language, title }: CreateOptions
  ) {
    const id = uuidv4()

    const { data } = await client.from("hooks").insert({
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

  async readAll(userId: string, isPublic?: boolean) {
    const [hooks, count] = await Promise.all([
      await client
        .from("hooks")
        .select("*")
        .eq("profile_id", userId)
        .returns<ReadAllRow[]>()
        .order("created_at", { ascending: false }),

      await client
        .from("hooks")
        .select("id", { count: "exact", head: true })
        .eq("profile_id", userId),
    ])

    return {
      data: readAllAdapater(hooks.data),
      count: count.count,
    }
  },
})

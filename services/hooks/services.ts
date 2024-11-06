import { v4 as uuidv4 } from "uuid"
import type { SupabaseClient } from "@supabase/supabase-js"
import type { Database } from "~/supabase/types"
import type {
  CreateOptions,
  EditOptions,
  ReadAllPublicProfile,
  ReadAllRow,
  ReadOneByUserOptions,
} from "./types"
import {
  readAllAdapater,
  readAllPublicProfileAdapter,
  readOneByUserAdapter,
  readOnePublicAdapter,
} from "./adapters"

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

  async edit(
    userId: string,
    { id, code, documentation, isPublic, language, title }: EditOptions
  ) {
    await client
      .from("hooks")
      .update({ code, documentation, is_public: isPublic, language, title })
      .match({ profile_id: userId, id: id })

    return { id }
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

  async readOneByUser({ id, userId }: ReadOneByUserOptions) {
    const response = await client
      .from("hooks")
      .select("*")
      .match({ id: id, profile_id: userId })
      .single()

    return readOneByUserAdapter(response.data)
  },

  async readAllPublicProfile(username: string) {
    const response = await client
      .from("hooks")
      .select(
        "id, title, code, documentation, language, created_at, profiles!inner( name, username, avatar_url, email, site, bio, jobtitle )"
      )
      .match({ "profiles.username": username, is_public: true })
      .returns<ReadAllPublicProfile[]>()
      .order("created_at", { ascending: false })

    return readAllPublicProfileAdapter(response.data)
  },

  async readOnePublic(id: string) {
    const response = await client
      .from("hooks")
      .select(
        "id, title, code, documentation, language, created_at, profiles!inner( username )"
      )
      .match({ id: id, is_public: true })
      .single()

    return readOnePublicAdapter(response.data)
  },
})

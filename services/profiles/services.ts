import type { SupabaseClient } from "@supabase/supabase-js"
import type { Database } from "~/supabase/types"
import { getMyselfAdapter, getPublicProfileAdapter } from "./adapters"
import type { EditOptions } from "./types"

export default (client: SupabaseClient<Database>) => ({
  async getMyself(userId: string) {
    const response = await client
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single()
    return getMyselfAdapter(response.data)
  },

  async edit(userId: string, { name, bio, site, jobtitle }: EditOptions) {
    await client
      .from("profiles")
      .update({ name, bio, site, jobtitle })
      .eq("id", userId)
    return { userId }
  },

  async getPublicProfile(username: string) {
    const response = await client
      .from("profiles")
      .select("*")
      .match({ username })
      .single()
    return getPublicProfileAdapter(response.data)
  },
})

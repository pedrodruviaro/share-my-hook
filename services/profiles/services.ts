import type { SupabaseClient } from "@supabase/supabase-js"
import type { Database } from "~/supabase/types"
import { getMyselfAdapter } from "./adapters"

export default (client: SupabaseClient<Database>) => ({
  async getMyself(userId: string) {
    const response = await client
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single()
    return getMyselfAdapter(response.data)
  },
})

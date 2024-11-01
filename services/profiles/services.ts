import type { SupabaseClient } from "@supabase/supabase-js"
import type { Database } from "~/supabase/types"

export default (client: SupabaseClient<Database>) => ({
  async getCurrentUser() {},
})

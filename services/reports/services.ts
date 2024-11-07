import type { SupabaseClient } from "@supabase/supabase-js"
import type { Database } from "~/supabase/types"

export default (client: SupabaseClient<Database>) => ({
  async getMyselfStats(userId: string) {
    const [totalCount, publicCount] = await Promise.all([
      await client
        .from("hooks")
        .select("id", { count: "exact", head: true })
        .eq("profile_id", userId),

      await client
        .from("hooks")
        .select("id", { count: "exact", head: true })
        .match({ profile_id: userId, is_public: true }),
    ])

    return {
      total: totalCount.count ?? 0,
      public: publicCount.count ?? 0,
      private:
        totalCount.count && publicCount.count
          ? totalCount.count - publicCount.count
          : 0,
    }
  },
})

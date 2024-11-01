import type { SupabaseClient } from "@supabase/supabase-js"
import type { Database } from "~/supabase/types"

export default (client: SupabaseClient<Database>) => ({
  async signInWithGitHub() {
    const config = useRuntimeConfig()

    const response = await client.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${config.public.siteUrl}/auth/redirect`,
      },
    })
    return response
  },

  async logout() {
    const response = await client.auth.signOut()
    return response
  },
})

import type {} from "@nuxtjs/supabase"

export default () => ({
  async signInWithGitHub() {
    const supabaseClient = useSupabaseClient()
    const config = useRuntimeConfig()

    const response = await supabaseClient.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${config.public.siteUrl}/auth/redirect`,
      },
    })
    return response
  },

  async logout() {
    const supabaseClient = useSupabaseClient()
    const response = await supabaseClient.auth.signOut()
    return response
  },
})

import AuthServices from "~/services/auth/services"
import HooksServices from "~/services/hooks/services"
import ProfilesServices from "~/services/profiles/services"
import ReportsServices from "~/services/reports/services"
import type { Database } from "~/supabase/types"

export function useServices() {
  const supabase = useSupabaseClient<Database>()

  return {
    auth: AuthServices(supabase),
    hooks: HooksServices(supabase),
    profiles: ProfilesServices(supabase),
    reports: ReportsServices(supabase),
  }
}

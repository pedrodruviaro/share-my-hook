import type { User } from "~/entities/User/User"

interface UseMyselfReportsOptions {
  user: User | undefined
}

type Reports = {
  total: number
  public: number
  private: number
}

export function useMyselfReports({ user }: UseMyselfReportsOptions) {
  const services = useServices()

  const loading = ref(true)
  const reports = ref<Reports>()

  const getReports = async () => {
    if (!user) return

    try {
      loading.value = true

      const response = await services.reports.getMyselfStats(user.id)

      if (!response) return

      reports.value = response
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    reports,
    getReports,
  }
}

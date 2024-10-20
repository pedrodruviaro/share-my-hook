import AuthService from "~/services/auth/auth"

export function useServices() {
  return {
    auth: AuthService(),
  }
}

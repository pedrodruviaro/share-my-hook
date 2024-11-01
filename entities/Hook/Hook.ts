import type { User } from "@/entities/User/User"

export type Languages = "typescript" | "javascript"

export interface Hook {
  id: string
  title: string
  code: string
  documentation: string
  language: Languages
  createdAt: Date
  isPublic: boolean
  profileId: string
}

export interface HookVirtual extends Hook {
  profiles: Partial<User>
}

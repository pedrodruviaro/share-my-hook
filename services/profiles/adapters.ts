import type { User } from "~/entities/User/User"
import type { ProfileRow } from "./types"

export function getMyselfAdapter(data: ProfileRow | null): User | null {
  if (!data) return null

  return {
    id: data.id,
    avatarUrl: data.avatar_url,
    name: data.name,
    username: data.username,
    bio: data.bio ?? "",
    site: data.site ?? "",
    jobtitle: data.jobtitle ?? "",
    createdAt: new Date(data.created_at),
  }
}
export function getPublicProfileAdapter(data: ProfileRow | null): User | null {
  if (!data) return null

  return {
    id: data.id,
    avatarUrl: data.avatar_url,
    name: data.name,
    username: data.username,
    bio: data.bio ?? "",
    site: data.site ?? "",
    jobtitle: data.jobtitle ?? "",
    createdAt: new Date(data.created_at),
  }
}

import type { Hook, Languages } from "~/entities/Hook/Hook"
import type { ReadAllPublicProfile, ReadAllRow, ReadOnePublic } from "./types"
import type { User } from "~/entities/User/User"

export function readAllAdapater(data: ReadAllRow[] | null): Hook[] | null {
  if (!data) return null

  const mapper = data.map((hook) => {
    return {
      id: hook.id,
      code: hook.code,
      documentation: hook.documentation,
      title: hook.title,
      language: hook.language as Languages,
      createdAt: new Date(hook.created_at),
      isPublic: hook.is_public,
      profileId: hook.profile_id || "",
    }
  })

  return mapper
}

export function readOneByUserAdapter(data: ReadAllRow | null): Hook | null {
  if (!data) return null

  return {
    id: data.id,
    code: data.code,
    documentation: data.documentation,
    title: data.title,
    language: data.language as Languages,
    createdAt: new Date(data.created_at),
    isPublic: data.is_public,
    profileId: data.profile_id || "",
  }
}

type ReadAllPublicProfileAdapter = {
  hooks: Omit<Hook, "profileId" | "isPublic">[]
  profile: Omit<User, "id">
}

export function readAllPublicProfileAdapter(
  data: ReadAllPublicProfile[] | null
): ReadAllPublicProfileAdapter | null {
  if (!data) return null

  const hooks = data.map((item) => {
    return {
      id: item.id,
      title: item.title,
      code: item.code,
      documentation: item.documentation,
      language: item.language as Languages,
      createdAt: new Date(item.created_at),
    }
  })

  const profile = {
    avatarUrl: data[0].profiles.avatar_url,
    name: data[0].profiles.name,
    username: data[0].profiles.username,
    bio: data[0].profiles.bio ?? "",
    site: data[0].profiles.site ?? "",
    jobtitle: data[0].profiles.jobtitle ?? "",
    createdAt: new Date(data[0].profiles.created_at),
  }

  return {
    hooks,
    profile,
  }
}

type ReadOnePublicAdapter = Omit<Hook, "profileId" | "isPublic"> & {
  profiles: Pick<User, "username">
}

export function readOnePublicAdapter(
  data: ReadOnePublic | null
): ReadOnePublicAdapter | null {
  if (!data) return null

  return {
    id: data.id,
    title: data.title,
    code: data.code,
    documentation: data.documentation,
    language: data.language as Languages,
    createdAt: new Date(data.created_at),
    profiles: {
      username: data.profiles.username,
    },
  }
}

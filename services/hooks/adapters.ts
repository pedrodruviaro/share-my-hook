import type { Hook, Languages } from "~/entities/Hook/Hook"
import type { ReadAllRow } from "./types"

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

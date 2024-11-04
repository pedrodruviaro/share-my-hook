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

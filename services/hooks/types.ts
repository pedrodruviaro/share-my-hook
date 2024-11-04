import type { Languages } from "~/entities/Hook/Hook"

export type CreateOptions = {
  title: string
  code: string
  documentation: string
  language: Languages
  isPublic: boolean
}

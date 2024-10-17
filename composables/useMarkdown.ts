import { marked } from "marked"

export function useMarkdown(text: string) {
  return marked.parse(text)
}

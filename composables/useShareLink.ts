import { useClipboard, useShare } from "@vueuse/core"

export function useShareLink() {
  const toast = useToast()
  const { share: nativeShare } = useShare()
  const { isSupported, copy } = useClipboard()

  const share = async (path: string, title?: string, description?: string) => {
    const url = `${window.location.origin}/${path}`

    if (!isSupported.value) {
      await copy(url)
      toast.add({
        color: "green",
        title: "Sucesso!",
        description: "Link copiado",
        timeout: 2000,
      })
      return
    }

    nativeShare({
      title: title || "shareMyHook",
      text: description || "",
      url,
    })
  }

  return {
    share,
  }
}

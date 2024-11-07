<script setup lang="ts">
const props = defineProps<{
  id: string
  title: string
  code: string
  lang: string
  isOwner: boolean
  isPublic: boolean
  createdAt?: Date
}>()

const emits = defineEmits<{
  (e: "wants-edit", id: string): void
}>()

const router = useRouter()
const handleNavigateToDetail = () => {
  router.push(`/hook/${props.id}`)
}

const formatedDate = computed(() => {
  if (!props.createdAt) return ""

  return new Date(props.createdAt).toLocaleDateString("pt-br")
})

const { share } = useShareLink()
const handleShare = async () => {
  await share(
    `hook/${props.id}`,
    "Hook do shareMyHook",
    `Veja esse hook ${props.title}`
  )
}
</script>

<template>
  <article
    class="space-y-4 p-4 border rounded-lg border-slate-200 dark:border-slate-700"
  >
    <div class="flex gap-2 justify-between">
      <div>
        <UBadge :label="props.lang" size="xs" color="gray" />
      </div>
      <UButton
        v-if="props.isPublic"
        label="Compartilhar"
        variant="ghost"
        icon="i-heroicons-share"
        trailing
        size="sm"
        @click="handleShare"
      />
    </div>

    <BaseTitle :label="props.title" />

    <ClientOnly>
      <HookSyntaxHighlight
        :code="props.code"
        :lang="props.lang"
        :limited-height="true"
      />
    </ClientOnly>

    <div class="flex gap-2 items-center flex-wrap justify-between">
      <div class="flex gap-2 flex-wrap">
        <UButton
          v-if="props.isOwner"
          label="Editar"
          variant="ghost"
          @click="emits('wants-edit', props.id)"
        />
        <UButton
          v-if="props.isPublic"
          label="Ver detalhe"
          variant="soft"
          @click="handleNavigateToDetail"
        />
      </div>

      <UBadge color="black" variant="soft" v-if="props.createdAt">{{
        formatedDate
      }}</UBadge>
    </div>
  </article>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "admin",
})

useSeoMeta({
  title: "Edite seu hook",
})

const route = useRoute()
const hookId = computed(() => route.params.id as string)

const userStore = useUserStore()

const { hook, loading: loadingHook } = useHook({
  hookId: hookId.value,
  user: userStore.user,
})

const {
  loading: loadingEdit,
  data,
  errors,
  edit,
} = useHookEdit({
  user: userStore.user,
  hook,
})
</script>

<template>
  <div class="space-y-6">
    <BaseTitle label="Edite o seu hook" />

    <HookEditFormLoader :loading="loadingHook">
      <HookEditForm
        :errors
        :loading="loadingEdit"
        v-model="data"
        @edit="edit"
      />
    </HookEditFormLoader>
  </div>
</template>

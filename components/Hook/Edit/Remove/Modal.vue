<script setup lang="ts">
const props = defineProps<{
  hookTitle: string
  loading: boolean
}>()

const emits = defineEmits<{
  (e: "confirm"): void
}>()

const isOpen = defineModel<boolean>({ required: true })
</script>

<template>
  <UModal v-model="isOpen">
    <UCard>
      <template #header>
        <h2>
          Deseja remover o hook <strong>{{ props.hookTitle }}</strong
          >?
        </h2>
      </template>

      <div class="flex gap-4 flex-wrap">
        <UButton
          label="Cancelar"
          color="black"
          variant="soft"
          :disabled="props.loading"
          @click="isOpen = false"
        />
        <UButton
          label="Remover"
          color="red"
          :loading="props.loading"
          @click="emits('confirm')"
        />
      </div>
    </UCard>
  </UModal>
</template>

<script setup lang="ts">
const props = defineProps<{
  loading: boolean
}>()

const isOpen = defineModel<boolean>({ required: true })

const emits = defineEmits<{
  (e: "confirm"): void
}>()
</script>

<template>
  <UModal v-model="isOpen">
    <UCard>
      <template #header>
        <BaseTitle size="sm" label="Deseja realmente sair?" />
      </template>

      <div class="flex flex-wrap gap-2">
        <UButton
          label="Voltar"
          variant="ghost"
          @click="isOpen = false"
          :disabled="props.loading"
        />
        <UButton
          label="Confirmar"
          @click="emits('confirm')"
          :loading="props.loading"
        />
      </div>
    </UCard>
  </UModal>
</template>

<script setup lang="ts">
const emits = defineEmits<{
  (e: "remove"): void
}>()
</script>

<template>
  <UCard>
    <div class="flex gap-2 flex-wrap justify-between">
      <p class="font-semibold text-xl">Zona perigosa</p>
      <UButton
        label="Apagar hook"
        color="red"
        icon="i-heroicons-trash"
        icon-pos="right"
        @click="emits('remove')"
      />
    </div>
  </UCard>
</template>

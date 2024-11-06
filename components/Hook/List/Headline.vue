<script setup lang="ts">
const props = defineProps<{
  label: string
}>()
</script>

<template>
  <section>
    <div class="mb-8">
      <div class="flex items-center justify-between flex-wrap gap-2">
        <p
          class="flex items-center gap-2 max-w-max border-b-[3px] border-sky-400 pr-3 pb-2 relative"
        >
          <UIcon name="i-heroicons-chevron-up-down" class="w-5 h-5" />
          {{ props.label }}
        </p>

        <slot name="actions" />
      </div>

      <UDivider class="-mt-[1.5px]" />
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string
  count?: number | string
  loading?: boolean
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

          <UChip
            v-if="props.count && !loading"
            :text="props.count"
            class="ml-2"
            size="2xl"
          />

          <USkeleton
            v-if="props.count && loading"
            class="w-4 h-4 rounded-full"
          />
        </p>

        <slot name="actions" />
      </div>

      <UDivider class="-mt-[1.5px]" />
    </div>
  </section>
</template>

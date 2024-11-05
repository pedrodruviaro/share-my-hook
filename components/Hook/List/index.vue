<script setup lang="ts">
const props = defineProps<{
  count: string | number
  label: string
}>()
</script>

<template>
  <div>
    <div class="mb-8">
      <p
        class="flex items-center gap-2 max-w-max border-b-[3px] border-sky-400 pr-3 pb-2 relative"
      >
        <UIcon name="i-heroicons-chevron-up-down" class="w-5 h-5" />
        {{ label }}
        <UBadge
          :ui="{ rounded: 'rounded-full' }"
          color="white"
          variant="solid"
          >{{ count }}</UBadge
        >
      </p>
      <UDivider class="-mt-[1.5px]" />
    </div>
    <div class="grid gap-4">
      <slot />
    </div>
  </div>
</template>

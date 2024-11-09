<script setup lang="ts">
type Sizes = "xs" | "sm" | "md" | "lg"

type SizeClasses = {
  [key in Sizes]: string
}

const props = withDefaults(
  defineProps<{
    as?: string
    size?: Sizes
    center?: boolean
    label?: string
  }>(),
  {
    as: "h1",
    size: "md",
    center: false,
  }
)

const sizeClasses: SizeClasses = {
  xs: "text-base md:text-lg",
  sm: "text-lg md:text-xl",
  md: "text-xl md:text-2xl",
  lg: "text-2xl md:text-3xl",
}
</script>

<template>
  <Component
    class="font-bold text-balance"
    :is="props.as"
    :class="[{ 'mx-auto text-center': props.center }, sizeClasses[props.size]]"
  >
    <template v-if="props.label">
      {{ props.label }}
    </template>

    <slot v-else />
  </Component>
</template>

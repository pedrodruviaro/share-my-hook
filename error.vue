<script setup lang="ts">
import type { NuxtError } from "#app"

const props = defineProps({
  error: Object as () => NuxtError,
})

const handleError = () => clearError({ redirect: "/dashboard" })
</script>

<template>
  <div>
    <h2>{{ props.error?.statusCode }}</h2>
    <p>{{ props.error?.message }}</p>
    <button @click="handleError">Voltar</button>
  </div>
</template>

<script setup lang="ts"></script>

<template>
  <BaseLayoutWrapper>
    <template #header>
      <USkeleton class="w-full py-8" />
    </template>
    <UContainer>
      <div class="grid gap-8 md:grid-cols-[1fr_2fr]">
        <USkeleton class="w-full h-50" />
        <div class="grid gap-4">
          <USkeleton class="w-full h-10 mb-2" />
          <USkeleton class="w-full h-20" />
          <USkeleton class="w-full h-20" />
          <USkeleton class="w-full h-20" />
        </div>
      </div>
    </UContainer>
  </BaseLayoutWrapper>
</template>

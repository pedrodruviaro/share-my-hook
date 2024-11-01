<script setup lang="ts"></script>

<template>
  <BaseLayoutWrapper>
    <template #header>
      <LandingPageHeader />
    </template>

    <UContainer>
      <slot />
    </UContainer>
  </BaseLayoutWrapper>
</template>

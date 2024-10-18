<script setup lang="ts"></script>

<template>
  <BasePageWrapper>
    <template #header>
      <LandingPageHeader />
    </template>

    <UContainer>
      <slot />
    </UContainer>
  </BasePageWrapper>
</template>

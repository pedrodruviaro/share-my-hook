<script setup lang="ts"></script>

<template>
  <BasePageWrapper>
    <template #header>
      <!-- @todo -> conditional header -->
      <LandingPageHeader />
    </template>

    <template>
      <UContainer>
        <slot />
      </UContainer>
    </template>
  </BasePageWrapper>
</template>

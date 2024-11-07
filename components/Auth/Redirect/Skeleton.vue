<script setup lang="ts"></script>

<template>
  <BaseLayoutWrapper>
    <template #header>
      <UContainer>
        <USkeleton class="w-full py-8" />
      </UContainer>
    </template>
    <UContainer>
      <div class="space-y-10">
        <USkeleton class="w-full h-36" />
        <ReportWidgetLoader :loading="true" />
        <HookListLoader :loading="true" />
      </div>
    </UContainer>
  </BaseLayoutWrapper>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "admin",
})
</script>

<template>
  <div class="grid gap-10 md:gap-4 md:grid-cols-[1fr_2fr]">
    <DashboardProfile
      avatarUrl="https://avatars.githubusercontent.com/u/82953655?s=400&u=35eed86dbbe67454cea86a22913f0a59731f2b7a&v=4"
      name="Pedro Ruviaro"
      username="pedroruviaro"
      jobtitle="Front end developer @ wire"
      website="https://pedroruviaro.com.br"
    />

    <div>
      <div class="mb-8">
        <p
          class="flex items-center gap-2 max-w-max border-b-[3px] border-sky-400 pr-3 pb-2 relative"
        >
          <UIcon name="i-heroicons-chevron-up-down" class="w-5 h-5" />
          Meus hooks
          <UBadge
            :ui="{ rounded: 'rounded-full' }"
            color="white"
            variant="solid"
            >7</UBadge
          >
        </p>
        <UDivider class="-mt-[1.5px]" />
      </div>

      <HookListLoader :loading="false">
        <HookList>
          <USkeleton class="w-full h-20" v-for="i in 4" :key="i" />
        </HookList>
      </HookListLoader>
    </div>
  </div>
</template>

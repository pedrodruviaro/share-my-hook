<script setup lang="ts">
const router = useRouter()

const handleNavigation = (path: string) => {
  router.push(path)
}

const handleLogout = () => {
  console.log("* Abrir confirm dialog")
}
</script>

<template>
  <BasePageWrapper>
    <template #header>
      <DashboardHeader
        avatarUrl="https://avatars.githubusercontent.com/u/82953655?s=400&u=35eed86dbbe67454cea86a22913f0a59731f2b7a&v=4"
        username="pedroruviaro"
        @navigate-to-dashboard="handleNavigation('/dashboard')"
        @navigate-to-create-hook="handleNavigation('/dashboard/hook/create')"
        @navigate-to-edit-profile="handleNavigation('/dashboard/profile/edit')"
        @logout="handleLogout"
      />
    </template>

    <UContainer>
      <slot />
    </UContainer>
  </BasePageWrapper>
</template>

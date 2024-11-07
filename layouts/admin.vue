<script setup lang="ts">
const userStore = useUserStore()
await userStore.loadUser()

const router = useRouter()
const siteUrl = useRuntimeConfig().public.siteUrl

const handleNavigation = (path: string, external: boolean = false) => {
  if (external) {
    if (!window) return
    window.open(siteUrl + path)
    return
  }

  router.push(path)
}

const { loading: loadingLogout, logout } = useAuthActions()

const isConfirmLogoutOpen = ref(false)

const handleLogout = async () => {
  try {
    await logout()
    router.push("/")
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <BaseLayoutWrapper>
    <template #header>
      <DashboardHeader
        v-if="userStore.user"
        :avatarUrl="userStore.user?.avatarUrl"
        :username="userStore.user?.username"
        @navigate-to-dashboard="handleNavigation('/dashboard')"
        @navigate-to-create-hook="handleNavigation('/dashboard/hook/create')"
        @navigate-to-edit-profile="handleNavigation('/dashboard/profile/edit')"
        @navigate-to-public-profile="
          handleNavigation(`/users/${userStore.user.username}`, true)
        "
        @logout="isConfirmLogoutOpen = true"
      />

      <LazyAuthModalLogout
        v-model="isConfirmLogoutOpen"
        :loading="loadingLogout"
        @confirm="handleLogout"
      />
    </template>

    <UContainer>
      <slot />
    </UContainer>
  </BaseLayoutWrapper>
</template>

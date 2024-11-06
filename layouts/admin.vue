<script setup lang="ts">
const userStore = useUserStore()
await userStore.loadUser()

const router = useRouter()

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
        @navigate-to-dashboard="router.push('/dashboard')"
        @navigate-to-create-hook="router.push('/dashboard/hook/create')"
        @navigate-to-edit-profile="router.push('/dashboard/profile/edit')"
        @navigate-to-public-profile="
          router.push(`/users/${userStore.user.username}`)
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

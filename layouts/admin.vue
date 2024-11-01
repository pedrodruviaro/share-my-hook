<script setup lang="ts">
const router = useRouter()

const handleNavigation = (path: string) => {
  router.push(path)
}

const { loading: loadingLogout, logout } = useAuthActions()
const isConfirmLogoutOpen = ref(false)
const handleLogout = async () => {
  try {
    await logout()
    router.push("/")
  } catch (error) {
    console.log("error -> ", error)
  }
}

const userStore = useUserStore()
await userStore.loadUser()
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
        @logout="isConfirmLogoutOpen = true"
      />

      <UModal v-model="isConfirmLogoutOpen">
        <UCard>
          <template #header>
            <BaseTitle size="sm" label="Deseja realmente sair?" />
          </template>

          <div class="flex flex-wrap gap-2">
            <UButton
              label="Voltar"
              variant="ghost"
              @click="isConfirmLogoutOpen = false"
              :disabled="loadingLogout"
            />
            <UButton
              label="Confirmar"
              @click="handleLogout"
              :loading="loadingLogout"
            />
          </div>
        </UCard>
      </UModal>
    </template>

    <UContainer>
      <slot />
    </UContainer>
  </BaseLayoutWrapper>
</template>

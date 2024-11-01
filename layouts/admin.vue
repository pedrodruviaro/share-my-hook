<script setup lang="ts">
const router = useRouter()
const user = useSupabaseUser()

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
</script>

<template>
  <BaseLayoutWrapper>
    <template #header>
      <DashboardHeader
        :avatarUrl="user?.user_metadata.avatar_url"
        :username="user?.user_metadata.user_name"
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

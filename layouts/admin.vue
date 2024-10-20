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
  </BasePageWrapper>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === "dark"
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark"
  },
})

const props = defineProps<{
  avatarUrl: string
  username: string
}>()

const emits = defineEmits<{
  (e: "navigate-to-dashboard"): void
  (e: "navigate-to-create-hook"): void
  (e: "navigate-to-edit-profile"): void
  (e: "navigate-to-public-profile"): void
  (e: "logout"): void
}>()

const items = [
  [
    {
      label: props.username,
      slot: "account",
      disabled: true,
    },
  ],
  [
    {
      label: "Dashboard",
      icon: "i-heroicons-chart-bar",
      click: () => emits("navigate-to-dashboard"),
    },
    {
      label: "Criar novo hook",
      icon: "i-heroicons-plus",
      click: () => emits("navigate-to-create-hook"),
    },
    {
      label: "Editar perfil",
      icon: "i-heroicons-pencil",
      click: () => emits("navigate-to-edit-profile"),
    },
    {
      label: "Ver perfil público",
      icon: "i-heroicons-user",
      click: () => emits("navigate-to-public-profile"),
    },
  ],
  [
    {
      label: "Sair",
      icon: "i-heroicons-arrow-left-on-rectangle",
      click: () => emits("logout"),
    },
  ],
]
</script>

<template>
  <header class="py-4 border-b border-b-slate-200 dark:border-b-slate-700">
    <UContainer>
      <div class="flex flex-wrap gap-2 justify-between items-center">
        <NuxtLink to="/dashboard">
          <Logo />
        </NuxtLink>

        <div class="flex items-center gap-2">
          <UButton
            :icon="isDark ? 'i-heroicons-moon' : 'i-heroicons-sun'"
            size="sm"
            color="white"
            square
            variant="ghost"
            @click="isDark = !isDark"
          />

          <UDropdown
            :items="items"
            :ui="{ item: { disabled: 'cursor-text select-text' } }"
            :popper="{ placement: 'bottom-start' }"
          >
            <UAvatar :src="props.avatarUrl" />

            <template #account="{ item }">
              <div class="text-left">
                <p>Logado como</p>
                <p class="truncate font-medium text-gray-900 dark:text-white">
                  {{ item.label }}
                </p>
              </div>
            </template>

            <template #item="{ item }">
              <span class="truncate">{{ item.label }}</span>

              <UIcon
                :name="item.icon"
                class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto"
              />
            </template>
          </UDropdown>
        </div>
      </div>
    </UContainer>
  </header>
</template>

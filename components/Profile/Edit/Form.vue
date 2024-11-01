<script setup lang="ts">
import type { ZodFormattedError } from "zod"
import type { UserInfos } from "~/entities/User/Infos"

const props = defineProps<{
  errors?: ZodFormattedError<UserInfos>
  loading: boolean
}>()

const emits = defineEmits<{
  (e: "save-profile"): void
}>()

const infos = defineModel<UserInfos>({
  required: true,
})
</script>

<template>
  <form class="space-y-2" @submit.prevent="emits('save-profile')">
    <div class="grid gap-2 md:grid-cols-2">
      <UFormGroup label="Nome" required>
        <UInput
          placeholder="John Doe"
          icon="i-heroicons-user"
          v-model="infos.name"
        />
        <UBadge color="red" variant="soft" v-if="props.errors?.name">{{
          props.errors?.name?._errors[0]
        }}</UBadge>
      </UFormGroup>

      <UFormGroup label="Cargo">
        <UInput
          placeholder="Fullstack Developer @ GitHub"
          icon="i-heroicons-briefcase"
          v-model="infos.jobtitle"
        />
        <UBadge color="red" variant="soft" v-if="props.errors?.jobtitle">{{
          props.errors?.jobtitle?._errors[0]
        }}</UBadge>
      </UFormGroup>
    </div>

    <UFormGroup label="Site">
      <UInput
        placeholder="http://www.johndoe.io"
        icon="i-heroicons-globe-alt"
        v-model="infos.site"
      />
      <UBadge color="red" variant="soft" v-if="props.errors?.site">{{
        props.errors?.site?._errors[0]
      }}</UBadge>
    </UFormGroup>

    <UFormGroup label="Fale um pouco sobre você">
      <UTextarea :rows="6" v-model="infos.bio" />
      <UBadge color="red" variant="soft" v-if="props.errors?.bio">{{
        props.errors?.bio?._errors[0]
      }}</UBadge>
    </UFormGroup>

    <UButton
      type="submit"
      label="Salvar"
      icon="i-heroicons-check"
      variant="outline"
      :loading="props.loading"
    />
  </form>
</template>

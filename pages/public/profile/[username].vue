<script setup lang="ts">
const handleOpenGithubProfile = () => {
  console.log("* Abrir página do github")
}
</script>

<template>
  <BasePageWrapper>
    <template #header>
      <LandingPageHeader />
    </template>

    <template>
      <UContainer class="grid gap-10 w-full">
        <ProfilePublicHeadline
          avatarUrl="https://avatars.githubusercontent.com/u/82953655?s=400&u=35eed86dbbe67454cea86a22913f0a59731f2b7a&v=4"
          username="pedroruviaro"
          jobtitle="Front end developer @ wire"
          bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ad!"
          @wants-see-github-profile="handleOpenGithubProfile"
        />

        <BaseWidget title="Hooks criados">
          <div class="grid gap-4 md:grid-cols-2">
            <USkeleton v-for="i in 4" :key="i" class="w-full h-20" />
          </div>
        </BaseWidget>
      </UContainer>
    </template>
  </BasePageWrapper>
</template>

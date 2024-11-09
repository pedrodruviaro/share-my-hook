<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === "dark")

const emits = defineEmits<{
  (e: "wants-login-with-github"): void
}>()
</script>

<template>
  <section>
    <div class="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto">
      <div class="text-center space-y-8">
        <UBadge variant="outline"> Typescript / JavaScript </UBadge>

        <div
          class="max-w-[15ch] mx-auto text-center text-3xl md:text-4xl lg:text-6xl font-bold"
        >
          <h1>
            Compartilhe seus
            <span
              class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
              >hooks
            </span>
            de forma fácil
          </h1>
        </div>

        <p
          class="max-w-[60ch] mx-auto text-lg lg:text-xl text-muted-foreground"
        >
          Descrubra e compartilhe hooks personalizados para acelerar o seu
          desenvolvimento e de quebra ainda ajude a comunidade
        </p>

        <div class="flex flex-wrap gap-3 justify-center items-center">
          <UButton
            size="lg"
            icon="i-heroicons-arrow-right-20-solid"
            trailing
            @click="emits('wants-login-with-github')"
            >Comece agora</UButton
          >

          <UButton
            size="lg"
            variant="soft"
            to="https://github.com/pedrodruviaro/share-my-hook"
            target="_blank"
          >
            Repositório no GitHub
          </UButton>
        </div>
      </div>

      <div class="relative group mt-14">
        <div
          class="absolute -top-6 right-12 w-[90%] h-12 lg:h-[80%] bg-primary/50 blur-3xl rounded-full img-shadow-animation"
        ></div>

        <img
          class="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-t-primary/30 img-border-animation"
          :src="isDark ? '/images/hero-dark.png' : '/images/hero-light.png'"
        />

        <div
          class="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"
        ></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.img-shadow-animation {
  animation-name: img-shadow-animation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
}

.img-border-animation {
  animation-name: img-border-animation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
}

@keyframes img-shadow-animation {
  from {
    opacity: 0.5;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes img-border-animation {
  from {
    @apply border-t-primary/10;
  }

  to {
    @apply border-t-primary/60;
  }
}
</style>

<script setup lang="ts"></script>

<template>
  <div>
    <div>
      <slot name="header" />
    </div>

    <div class="my-10 md:my-16">
      <slot />
    </div>
  </div>
</template>

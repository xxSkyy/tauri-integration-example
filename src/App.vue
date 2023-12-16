<script lang="ts" setup>
import Counter from "./components/Counter.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <div
    class="w-screen h-screen bg-neutral-900 text-white flex items-center justify-center"
  >
    <div class="flex justify-center items-center flex-col gap-y-4">
      <Header />
      <hr class="bg-white w-full" />
      <Counter />
    </div>
  </div>
</template>

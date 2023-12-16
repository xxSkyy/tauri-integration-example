<script lang="ts" setup>
import BaseButton from "@/components/BaseButton.vue";
import { ref } from "vue";

const counter = ref(0);

const increase = () => {
  counter.value++;
};

const decrease = () => {
  counter.value--;
};
</script>

<template>
  <div class="flex flex-col text-center gap-y-4">
    <div class="text-2xl">Counter: {{ counter }}</div>
    <div class="flex flex-row gap-x-4 justify-center">
      <BaseButton @click="increase"> +1 </BaseButton>
      <BaseButton @click="decrease">-1</BaseButton>
    </div>
  </div>
</template>

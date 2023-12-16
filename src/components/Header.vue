<template>
  <div class="text-center">
    <div class="flex flex-row">
      <a href="https://vitejs.dev" target="_blank">
        <img src="@/assets/tauri.svg" class="logo tauri" alt="tauri logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <h2 class="text-4xl font-bold">Tauri + Vue</h2>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo.tauri:hover {
  filter: drop-shadow(0 0 2em #fff);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

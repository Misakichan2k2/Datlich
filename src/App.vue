<script setup>
import { RouterView } from "vue-router";
import Menu from "./Menu.vue";
</script>

<template>
  <div class="flex">
    <div>
      <Menu />
    </div>

    <div class="flex-1 relative p-4">
      <RouterView />
    </div>
  </div>
</template>

<style>
* {
  text-decoration: none;
  color: black;
}
</style>

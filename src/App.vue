<script setup>
import { RouterView } from "vue-router";
import SideBar from "./components/SideBar.vue";
</script>

<template>
  <header></header>
  <div class="flex">
    <SideBar> <RouterView /> </SideBar>
  </div>
</template>

<style scoped></style>

<script setup>

import { ref } from "vue";

const props = defineProps([
  "title",
  "placeholder",
  "type",
  "qtdMinima",
  "icon",
]);

const passwordFieldType = ref(props.type);
const switchVisibility = () =>
  (passwordFieldType.value =
    passwordFieldType.value === "password" ? "text" : "password");
</script>

<template>
  <header>
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
  </header>

  <div class="divMininput relative mr-3">
    <p class="text-indiv font-semibold text-xs pt-2">{{ title }}</p>
    <input
      class="inputs"
      :placeholder="placeholder"
      :type="passwordFieldType"
      :minlength="qtdMinima"
      v-model="password"
    />
    <div>
      <span
        @click="switchVisibility()"
        v-if="icon"
        class="cursor-pointer absolute right-4 top-4 text-roxinho material-icons"
        >{{ passwordFieldType == "password" ? "visibility" : "visibility_off" }}</span
      >
    </div>
  </div>
</template>

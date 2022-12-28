<script setup>
import { ref } from "vue";
import { defineEmits } from 'vue'

const emit = defineEmits(['update:modelValue']) 

const props = defineProps([
  "title",
  "placeholder",
  "type",
  "qtdMinima",
  "icon",
  "modelValue",
]);

const handleInput = (e) => {
  emit("update:modelValue", e.target.value)
}

const content = ref('');

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
  <div class="divInput relative">
    <p class="text-indiv font-semibold text-xs pt-2">{{ title }}</p>
    <input
      @input="handleInput"
      v-model="content"
      class="inputs"
      :placeholder="placeholder"
      :type="passwordFieldType"
      :minlength="qtdMinima"
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

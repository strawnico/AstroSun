<script setup>
import { defineEmits } from 'vue'

const props = defineProps(["functionBtn"]);

const emit = defineEmits(['click']) 

const handleBtn = (e) => {
  emit("click")
}
</script>

<template>
    <button  @click="handleBtn" class="btn">{{ functionBtn }}</button>
</template>

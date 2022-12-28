<script setup>
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
import Mininput from "../components/Mininput.vue";
import { ref } from 'vue'
import { auth } from "../../auth/firebase";
import {createUserWithEmailAndPassword} from 'firebase/auth'
console.log(auth)
const senha = ref('');
const email = ref('');


const click = () => {
  createUserWithEmailAndPassword(auth, email.value, senha.value)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}


</script>

<template>
  <main class="wpp flex">
    <div class="pt-5 pl-3">
      <a href="#/" class="absolute">
        <img src="@/assets/logo.svg" />
      </a>
    </div>
    <div class="ml-10 my-auto">
      <div class="font-poppins">
        <span class="text-white text-4xl">Crie sua conta</span>
        <span class="text-roxinho text-7xl">.</span>
      </div>
      <div class="font-poppins mt-2 mb-12">
        <span class="text-stone-400 text-sm">Já tem conta?</span>
        <span class="text-sm">
          <a href="/" class="ml-2 font-semibold text-roxinho">Entrar</a>
        </span>
      </div>
      <div class="flex">
        <Mininput title="Nome" placeholder="ex: Nicole" />
        <Mininput title="Sobrenome" placeholder="ex: Silva" />
      </div>
      <Input
       v-model="email"
        title="Email"
        placeholder="digiteseuemail@email.com"
        type="email"
      />
      <Input
        v-model="senha"
        title="Senha"
        placeholder="sua senha aqui"
        type="password"
        qtd-minima="6"
        :icon="true"
      />
      <Button @click="click" function-btn="Cadastrar" />
    </div>
    <div class="text-white"></div>
  </main>
</template>

<script setup>
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../auth/firebase";
import { ref } from "vue";
import { useToast } from "vue-toastification";

 const toast = useToast();

const senha = ref("");
const email = ref("");

const sign = () => {
  signInWithEmailAndPassword(auth, email.value, senha.value)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.pathname = "/hero";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error('puts deu errado')
    });
};
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
        <span class="text-white text-4xl">Entre na sua conta</span>
        <span class="text-roxinho text-7xl">.</span>
      </div>
      <div class="font-poppins mt-2 mb-12">
        <span class="text-stone-400 text-sm">Não tem conta?</span>
        <span class="text-sm">
          <a href="/cadastro" class="ml-2 font-semibold text-roxinho"
            >Cadastrar</a
          >
        </span>
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
      <Button @click="sign" function-btn="Entrar" />
    </div>
    <div class="text-white"></div>
  </main>
</template>

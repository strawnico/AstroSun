<script setup>
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
import Mininput from "../components/Mininput.vue";
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
        title="Email"
        placeholder="digiteseuemail@email.com"
        type="email"
      />
      <Input
        title="Senha"
        placeholder="sua senha aqui"
        type="password"
        qtd-minima="6"
        :icon="true"
      />
      <Button function-btn="Cadastrar" />
    </div>
    <div class="text-white"></div>
  </main>
</template>

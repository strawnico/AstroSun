<script setup>
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
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
      <Button function-btn="Entrar" />
    </div>
    <div class="text-white"></div>
  </main>
</template>

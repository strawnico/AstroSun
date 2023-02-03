<script setup>
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
</script>

<template>
  <header>
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
  </header>
  <main class="herowpp flex flex-col">
    <div class="p-4 bg-[#292039] border-b-2 border-[#565656] h-16 w-full">
      <p class="text-white ml-0 lg:ml-3">Home</p>
    </div>

    <div
      class="flex-col flex p-4 bg-[#292039] border-2 border-[#565656] h-min mt-8 lg:mx-56 mx-20 rounded-xl"
    >
      <div class="flex">
        <img
          src="https://www.tenda.com/eudouconta/wp-content/uploads/2021/09/Pessoa-fisica-mobile.jpg"
          class="w-12 h-12 rounded-full"
        />
        <input
          class="h-5 bg-[#3E354F] rounded-3xl px-5 py-5 w-full ml-4 outline-none text-gray-200"
          placeholder="How's sky today?"
        />
      </div>
      <div class="flex flex-row mt-4 items-center">
        <div class="flex flex-row gap-4">
          <span class="material-icons cursor-pointer"> photo_camera </span>
          <span class="material-icons cursor-pointer"> image </span>
          <span class="material-icons cursor-pointer"> emoji_emotions </span>
        </div>
        <button
          class="border-[#3E354F] border-2 rounded-xl py-1 px-6 mx-auto mr-0"
        >
          Enviar
        </button>
      </div>
    </div>

    <div
      class="p-4 bg-[#292039] border-2 border-[#565656] h-min mt-8 lg:mx-56 mx-20 rounded-xl"
    >
      <div class="flex-row flex">
        <img
          src="https://tudocommoda.com/wp-content/uploads/2022/01/pessoa-interessante.png"
          class="w-12 h-12 rounded-full bg-contain"
        />
        <div class="ml-4">
          <p class="text-white font-medium">Carla</p>
          <p class="text-white font-normal text-sm">
            Hoje o céu tá lindo, dá pra ver marte e vênus! 😁😁
          </p>
        </div>
      </div>
      <div class="flex flex-row gap-4 mt-4">
        <span class="material-icons cursor-pointer"> favorite_border </span>
        <span class="material-icons cursor-pointer"> chat_bubble_outline </span>
        <span class="material-icons cursor-pointer"> share </span>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import Search from "./Search.vue";
const router = useRouter();
const route = useRoute();

function pushWithQuery(query) {
  router.push({
    name: "search",
    query: {
      ...route.query,
    },
  });
}
</script>

<template>
  <header>
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
  </header>
  <div class="drawer drawer-mobile">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col bg-[#292039]">
      <label
        v-if="route.name != 'cadastro' && route.name != 'login'"
        for="my-drawer-2"
        class="cursor-pointer lg:hidden bg-[#292039] max-w-fit"
        ><span class="mt-3 ml-3 material-icons">menu</span></label
      >
      <slot></slot>
    </div>
    <div
      v-if="route.name != 'cadastro' && route.name != 'login'"
      class="drawer-side"
    >
      <label for="my-drawer-2" class="drawer-overlay"></label>
      <ul
        class="menu p-4 w-80 bg-[#292039] border-r-2 border-[#565656] text-base-content"
      >
        <!-- Sidebar content here -->
        <div>
          <div class="pt-2">
            <a href="#/" class="absolute">
              <img src="@/assets/logo.svg" />
            </a>
          </div>
          <Search />
          <div class="mt-8">
            <li>
              <a
                href="/home"
                class="active:bg-purple-800 active:text-white hover:text-purple-500"
                >Home</a
              >
            </li>
            <li>
              <a
                href="/notification"
                class="active:bg-purple-800 active:text-white hover:text-purple-500"
                >Notifications</a
              >
            </li>
            <li>
              <a
                href="/messages"
                class="active:bg-purple-800 active:text-white hover:text-purple-500"
                >Messages</a
              >
            </li>
            <li>
              <a
                href="/profile"
                class="active:bg-purple-800 active:text-white hover:text-purple-500"
                >Profile</a
              >
            </li>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

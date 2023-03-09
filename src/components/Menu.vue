<script setup>
import { ref } from "vue";
import menuItems from "./menuItems";
import MenuItem from "./MenuItem.vue";

const collapsed = ref(false);


const scroll = (e) => {
  console.log(e)
  const evento = document.getElementById(e);
 evento.scrollIntoView({ behavior: "smooth" });
 };
</script>

<template class="">
  <div>
    <div :class="['menu', collapsed ? 'collapsed' : 'expanded']">
      <div class="flex justify-end">
        <button class="p-3 mr-3" @click="collapsed = !collapsed">
          <font-awesome-icon icon="fa-solid fa-bars" size="2x"/>
        </button>
      </div>

      <div class="p-3 text-center">
        <img
          class="rounded-full min-w-[50px] max-w-[200px] w-full mx-auto"
          :src="'img/' + menuItems.profile.image"
          alt=""
        />
        <div class="px-0 py-3 text-2xl" v-if="!collapsed">{{ menuItems.profile.name }}</div>
      </div>
      <div>
        <ul>
          <MenuItem
            v-for="MenuItem in menuItems.items"
            :key="MenuItem.id"
            :item="MenuItem"
            :collapsed="collapsed"
            :id="SectionScroll"
          />
        </ul>
      </div>
    </div>
    <!-- <div class="bg-grayDark p-8 text-white flex justify-between">
      <div>
        <a class="p-10 hover:bg-purple" href="#inicioDelProyecto">WELIPORT</a>
      </div>
      <div class="mr-10">
        <a
          class="p-10 hover:bg-purple"
          v-for="(array, link) in objectNav"
          v-bind:key="link"
          :href="'#' + link"
          :id="link"
          @click="scroll(link)"
          >{{ array }}</a
        >
      </div>
      <button @click="mas()">mas</button>
      <button @click="menos()">menos</button>
      <button @click="reset()">reset</button>
      <button :disabled="bloquearBtnAdd" @click="add(contador)">add</button>
      <h1 :class="bg">{{ contador }}</h1>
      <h1>{{ array }}</h1> -->
    <!-- </div> -->
  </div>
</template>

<style scoped>
.menu {
  @apply bg-grayDark text-white h-[100vh] transition-[width] ease-in-out duration-300 fixed top-0 left-0 z-20;
}

.collapsed {
  @apply w-[80px];
}

.expanded {
  @apply w-[350px];
}
</style>
<script setup>
import { ref } from "vue";
import menuItems from "./menuItems.js";
import MenuItem from "./MenuItem.vue";


const collapsed = ref(true);

components: {
  MenuItem,
  menuItems
}

</script>

<template>
  <div>
    <div :class="['menu', collapsed ? 'collapsed' : 'expanded']">
      <div class="flex justify-end">
        <button class="p-3 mr-0 sm:mr-3" @click="collapsed = !collapsed">
          <font-awesome-icon icon="fa-solid fa-bars" size="2x" />
        </button>
      </div>

      <div class="p-3 text-center">
        <img
          class="rounded-full sm:min-w-[50px] min-w-[40px] max-w-[200px] w-full mx-auto"
          :src="'img/' + menuItems.profile.image"
          alt=""
        />
        <div class="px-0 py-3 text-2xl" v-if="!collapsed">
          {{ menuItems.profile.name }}
        </div>
      </div>
      <div>
        <MenuItem
          v-for="Menu in menuItems.items"
          :key="Menu.id"
          :item="Menu"
          :collapsed="collapsed" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu {
  @apply bg-grayDark text-white h-[120rem] transition-[width] ease-in-out duration-300 fixed top-0 left-0 z-20;
}

.collapsed {
  @apply sm:w-[80px] w-[60px];; 
}

.expanded {
  @apply sm:w-[350px] w-[200px];
}
</style>
<script setup>
const props = defineProps(["item", "collapsed"]);

</script>

<template>
  <a :href="'#' + props.item.SectionScroll" class="text-white hover:text-black">
    <div
      class="flex justify-center p-3 sm:gap-2 relative animation animation-hover">
      <div class="flex sm:flex-none flex-1 justify-center w-[80px]">
        <font-awesome-icon :icon="['fa-solid', props.item.icon]" size="2x" />
      </div>
      <div
        class="flex flex-auto sm:flex-none justify-center items-end w-[80px] text-base sm:text-xl"
        v-if="!collapsed"
      >
        {{ props.item.title }}
      </div>
    </div>
  </a>
</template>

<style scoped>
.animation::before {
  @apply scale-x-0 origin-bottom-right
}

.animation-hover:hover::before {
   @apply scale-x-100 origin-bottom-left
}

.animation::before {
  @apply content-[''] absolute inset-0 bg-purple -z-10 transition-transform duration-300 ease-out;
}
</style>



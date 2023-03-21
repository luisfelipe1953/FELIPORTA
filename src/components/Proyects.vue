<script setup>
import proyectsItems from "./proyectsItems";
import Preview from "./Preview.vue";
</script>

<template>
  <div id="proyects">
    <h1 class="font-bold text-white text-center sm:text-3xl text-2xl mt-40">Proyectos / proyects</h1>
    <div>
      <Preview />
    </div>
    <div class="sm:container container-md mx-auto grid sm:grid-cols-3 grid-cols-1 gap-5 mt-20">
      <div
        class="shadow-hover ml-12 sm:m-0 mt-10 justify-self-center"
        v-for="proyectsItem in proyectsItems.proyects"
        :key="proyectsItem.id"
      >
        <h1 class="m-10  sm:text-base  text-[10px]">{{ proyectsItem.title }}</h1>
        <p class="m-10 sm:text-base text-[10px]">
          {{ proyectsItem.text }}
        </p>
        <a class="p-10" target="_blank" rel="noopener noreferrer" :href="proyectsItem.url">
          <font-awesome-icon
            class="absolute top-3/4 sm:left-28 left-[75px] transition-transform hover:scale-110 hover:text-purple ease-in-out"
            icon="fa-brands fa-github"
            size="3x"
          />
        </a>
         <a class="p-10" target="_blank" rel="noopener noreferrer" :href="proyectsItem.urlSitio">
            <font-awesome-icon class="absolute top-3/4 sm:left-48 left-[130px] transition-transform hover:scale-110 hover:text-purple ease-in-out"
          icon="fa-solid fa-up-right-from-square" size="3x"/>
          </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.shadow-hover {
  @apply relative sm:w-[350px] min-w-[250px] sm:h-[350px] min-h-[250px] bg-grayDark text-white transition-[box-shadow] duration-100 rounded-[75px];
}

.shadow-hover:hover {
  box-shadow: 0 10px 60px 0px rgba(0, 0, 0, 0.1);
}

.shadow-hover:hover::before,
.shadow-hover:hover::after {
  animation: 1s clockwise infinite;
  @apply block content-[''] absolute sm:w-[350px] min-w-[250px] sm:h-[350px] min-h-[250px] bg-purple rounded-[75px] -z-10;
}

.shadow-hover:hover:after {
  animation: 2s counterclockwise infinite;
  @apply bg-pink;
}

@keyframes clockwise {
  0% {
    top: -5px;
    left: 0;
  }
  12% {
    top: -2px;
    left: 2px;
  }
  25% {
    top: 0;
    left: 5px;
  }
  37% {
    top: 2px;
    left: 2px;
  }
  50% {
    top: 5px;
    left: 0;
  }
  62% {
    top: 2px;
    left: -2px;
  }
  75% {
    top: 0;
    left: -5px;
  }
  87% {
    top: -2px;
    left: -2px;
  }
  100% {
    top: -5px;
    left: 0;
  }
}

@keyframes counterclockwise {
  0% {
    top: -5px;
    right: 0;
  }
  12% {
    top: -2px;
    right: 2px;
  }
  25% {
    top: 0;
    right: 5px;
  }
  37% {
    top: 2px;
    right: 2px;
  }
  50% {
    top: 5px;
    right: 0;
  }
  62% {
    top: 2px;
    right: -2px;
  }
  75% {
    top: 0;
    right: -5px;
  }
  87% {
    top: -2px;
    right: -2px;
  }
  100% {
    top: -5px;
    right: 0;
  }
}
</style>
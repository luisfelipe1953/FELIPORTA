<script setup>
import { ref } from "vue";

</script>

<template class="">
  <div>
    <img class="absolute w-full sm:h-[1000px] h-[1200px] object-cover bg-gradient -z-30" src="../assets/header1.jpg" />
    <div class="bg-gradient-to-r from-grayDark sm:min-h-[1000px] m-h-[1200px] absolute top-0 left-0 w-full -z-20"></div>

    <div class="z-20 absolute sm:top-1/3 top-1/3 sm:left-1/2 left-72 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden text-white text-4xl sm:text-6xl font-bold ">
      <div class="contenedor font-bold overflow-hidden sm:h-14 h-10 sm:px-10 relative">
        <p class="inline-block float-left">Welcome</p>
        <ul class="list sm:ml-80 ml-48 text-left">
          <li class="item">world !</li>
          <li class="item">bob !</li>
          <li class="item">users !</li>
          <li class="item">everybody!</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contenedor:before {
  content: "[";
  left: 0;
  @apply hidden sm:absolute
}

.contenedor:after {
  content: "]";
  right: 0;
  @apply hidden sm:absolute
}

.contenedor:after,
.contenedor:before {
  animation-name: opacity;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  @apply absolute top-0 sm:text-6xl text-3xl text-pink;
}

.list {
  -webkit-animation-name: change;
  -webkit-animation-duration: 10s;
  -webkit-animation-iteration-count: infinite;
  animation-name: change;
  animation-duration: 10s;
  animation-iteration-count: infinite;
}

@-webkit-keyframes opacity {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@-webkit-keyframes change {
  0%,
  12.66%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  16.66%,
  29.32% {
    transform: translate3d(0, -25%, 0);
  }
  33.32%,
  45.98% {
    transform: translate3d(0, -50%, 0);
  }
  49.98%,
  62.64% {
    transform: translate3d(0, -75%, 0);
  }
  66.64%,
  79.3% {
    transform: translate3d(0, -50%, 0);
  }
  83.3%,
  95.96% {
    transform: translate3d(0, -25%, 0);
  }
}

@-o-keyframes opacity {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@-o-keyframes change {
  0%,
  12.66%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  16.66%,
  29.32% {
    transform: translate3d(0, -25%, 0);
  }
  33.32%,
  45.98% {
    transform: translate3d(0, -50%, 0);
  }
  49.98%,
  62.64% {
    transform: translate3d(0, -75%, 0);
  }
  66.64%,
  79.3% {
    transform: translate3d(0, -50%, 0);
  }
  83.3%,
  95.96% {
    transform: translate3d(0, -25%, 0);
  }
}

@-moz-keyframes opacity {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@-moz-keyframes change {
  0%,
  12.66%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  16.66%,
  29.32% {
    transform: translate3d(0, -25%, 0);
  }
  33.32%,
  45.98% {
    transform: translate3d(0, -50%, 0);
  }
  49.98%,
  62.64% {
    transform: translate3d(0, -75%, 0);
  }
  66.64%,
  79.3% {
    transform: translate3d(0, -50%, 0);
  }
  83.3%,
  95.96% {
    transform: translate3d(0, -25%, 0);
  }
}

@keyframes opacity {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@keyframes change {
  0%,
  12.66%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  16.66%,
  29.32% {
    transform: translate3d(0, -25%, 0);
  }
  33.32%,
  45.98% {
    transform: translate3d(0, -50%, 0);
  }
  49.98%,
  62.64% {
    transform: translate3d(0, -75%, 0);
  }
  66.64%,
  79.3% {
    transform: translate3d(0, -50%, 0);
  }
  83.3%,
  95.96% {
    transform: translate3d(0, -25%, 0);
  }
}

</style>

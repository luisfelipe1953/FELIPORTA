<script setup>
</script>

<template>
  <div id="contact">
    <h1 class="font-bold text-center text-white text-3xl mt-40">Contacto / Contact</h1>
    <div class="mb-60">
      <ul class="flex justify-center gap-10 sm:mt-[1600px] mt-[3200px]">
        <li >
          <a class="redondo" href="#">
            <font-awesome-icon icon="fa-brands fa-github" size="4x" />
          </a>
        </li>
        <li >
          <a class="caudrado" href="#">
            <font-awesome-icon icon="fa-brands fa-linkedin" size="4x" />
          </a>
        </li>
        <li >
          <a class="rectangulo" href="#">
            <font-awesome-icon icon="fa-solid fa-envelope" size="4x" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
ul {
  transform: translate(-50%, -50%);
  @apply flex absolute top-full left-1/2;
}


ul li a {
  transition: 0.5s;
  @apply bg-grayDark text-gray-300 relative block 
}

ul li a::before {
  transform: scale(0.9);
   @apply bg-purple content-[''] absolute top-0 left-0 w-full h-full duration-500 -z-10
}
.redondo {
  @apply rounded-full w-[70px] 
}
.redondo:before {
  @apply rounded-full w-[70px] 
}

.caudrado {
  @apply rounded w-[62px] h-[60px]
}
.caudrado:before {
  @apply rounded w-[62px] h-[60px] 
}

.rectangulo {
  @apply rounded-lg w-[70px] h-[53px]
}
.rectangulo:before {
  @apply rounded-lg w-[70px] h-[53px]
}

ul li a:hover::before {
  transform: scale(1.1);
  box-shadow: 0 0 10px #865DFF;
}

ul li a:hover {
  box-shadow: 0 0 10px #865DFF;
  text-shadow: 0 0 10px #865DFF;
  @apply text-purple  
}
</style>
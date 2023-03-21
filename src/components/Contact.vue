<script setup>
</script>

<template>
  <div id="contact">
    <h1 class="font-bold text-center text-white sm:text-3xl sm:ml-0 ml-10 text-2xl mt-40">Contacto / Contact</h1>
    <div class="mb-60">
      <ul class="grid grid-cols-3  gap-10  sm:mt-[1600px]">
        <li>
          <a class="redondo" target="_blank"  rel="noopener noreferrer" href="https://github.com/luisfelipe1953">
            <font-awesome-icon icon="fa-brands fa-github" size="4x" />
          </a>
        </li>
        <li >
          <a class="caudrado" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/luis-felipe-fern%C3%A1ndez-betancur-474639267/">
            <font-awesome-icon icon="fa-brands fa-linkedin" size="4x" />
          </a>
        </li>
        <li >
          <a class="rectangulo" target="_blank" rel="noopener noreferrer" href="https://mail.google.com/mail/?view=cm&to=luisfelipefernandezbetancur@gmail.com">
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
  @apply absolute left-1/2 mt-20;
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
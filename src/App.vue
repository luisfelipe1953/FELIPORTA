<script setup>
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";
import Skills from "./components/Skills.vue";
import Gato from "./components/Gato.vue";
import Me from "./components/Me.vue";
import Proyects from "./components/Proyects.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";


components: {
  Header,
  Menu,
  Skills,
  Gato,
  Me,
  Proyects,
  Contact,
  Footer
}
</script>

<template >
  <Header />
  <Menu />
  <Gato />
  <Me />
  <Skills />
  <Proyects />
  <Contact />  
  <Footer />
</template>



<script>
// Import Swiper styles
import { EffectCards, Pagination, Autoplay } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { ref } from "vue";

export default {
  components: { Swiper, SwiperSlide },
  methods: {
      funcionMobile() {
      return window.innerWidth < 768 ? '' : 'cards';
    },
  },
  setup() {
    const VirtualMeetSwp = ref([
      {
        name: "Virtualmeet",
        image: [
          {
            id: 0,
            imagenesId: "virtualmeet.png",
          },
          {
            id: 1,
            imagenesId: "virtualmeet1.png",
          },
          {
            id: 2,
            imagenesId: "virtualmeet2.png",
          },
          {
            id: 3,
            imagenesId: "virtualmeet3.png",
          },
          {
            id: 4,
            imagenesId: "virtualmeet4.png",
          },
        ],
      },
    ]);
    const JeanCellSwp = ref([
      {
        name: "JeanCell",
        image: [
          {
            id: 0,
            imagenesId: "jeancell.png",
          },
          {
            id: 1,
            imagenesId: "jeancell1.png",
          },
          {
            id: 2,
            imagenesId: "jeancell2.png",
          },
          {
            id: 3,
            imagenesId: "jeancell3.png",
          },
        ],
      },
    ]);
    return {
      modules: [Pagination, Autoplay, EffectCards],
      VirtualMeetSwp,
      JeanCellSwp,
    };
  },
};
</script>

<template>
  <h1 class="font-bold text-white text-center sm:text-3xl text-2xl mt-40">
    Preview
  </h1>
  <div class="sm:container mx-auto container-md ml-20 sm:ml-auto">
    <div class="grid sm:grid-cols-3 grid-cols-1 gap-20 mt-20">
      <div
        v-for="item in VirtualMeetSwp"
        :key="item.name"
        class="sm:w-full w-64"
      >
        <h2
          class="font-bold text-white text-center sm:text-3xl text-2xl sm:mt-20 mt-0 mb-5"
        >
          {{ item.name }}
        </h2>
        <swiper
          :modules="modules"
          :space-between="20"
          :loop="true"
          :effect="funcionMobile()"
          :pagination="false"
          :autoplay="{
            delay: 7000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }"
        >
          <swiper-slide v-for="imagenes in item.image" :key="imagenes.id">
            <img class="rounded-xl" :src="'/img/' + imagenes.imagenesId" />
          </swiper-slide>
        </swiper>
      </div>
      <div v-for="item in JeanCellSwp" :key="item.name" class="sm:w-full w-64">
        <h2
          class="font-bold text-white text-center sm:text-3xl text-2xl mt-20 mb-5"
        >
          {{ item.name }}
        </h2>
        <swiper
          :modules="modules"
          :loop="true"
          :effect="funcionMobile()"
          :pagination="false"
          :autoplay="{
            delay: 7000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }"
        >
          <swiper-slide v-for="imagenes in item.image" :key="imagenes.id">
            <img class="rounded-xl" :src="'/img/' + imagenes.imagenesId" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<template>
<swiper :options="swiperOption" ref="mySwiper" class="swiper">
 <!-- slides -->
 <swiper-slide><img src="../../assets/banner1.jpg" alt=""></swiper-slide>
 <swiper-slide><img src="../../assets/banner2.jpg" alt=""></swiper-slide>
 <swiper-slide><img src="../../assets/banner3.jpg" alt=""></swiper-slide>
 <!-- Optional controls -->
  <div class="swiper-pagination" slot="pagination"></div>
</swiper>
</template>
<script>
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'carrousel',
 data() {
   return {
     swiperOption: {
        autoplay: true,
        loop:true,
        pagination : '.swiper-pagination'
     }
   }
 },components: {
 swiper,
 swiperSlide
},
 computed: {
   swiper() {
     return this.$refs.mySwiper.swiper
   }
 }
}
</script>
<style lang="scss">
.swiper{width: 100%;
  img{width: 100%}
}
</style>

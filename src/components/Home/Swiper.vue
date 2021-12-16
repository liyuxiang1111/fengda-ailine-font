<template>
  <swiper :options="swiperOption" class="swiper-container swiper-pagination1" ref="mySwiper">
    <!-- 添加的图片 -->
    <swiper-slide class="slide-box">
      <img class="banner-img" :src="imag1" />
    </swiper-slide>
    <swiper-slide class="slide-box">
      <img class="banner-img" :src="imag2" />
    </swiper-slide>
    <swiper-slide class="slide-box">
      <img class="banner-img" :src="imag3" />
    </swiper-slide>

    <!-- 指示点 -->
    <div class="swiper-pagination" slot="pagination"></div>

    <!-- 左右导航栏 -->
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div> -->
  </swiper>
</template>

<script>
require('@/assets/css/swiper.css')
import '@/assets/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      imag1: require(`@/assets/image/scenery/故宫.jpg`),
      imag2: require(`@/assets/image/scenery/九寨沟.jpg`),
      imag3: require(`@/assets/image/scenery/雷峰塔.jpg`),
      swiperOption: {
        pagination: '.swiper-pagination1',
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: false,
        spaceBetween: 0,
        onSlideChangeEnd: (swiper) => {
          //放swiper的回调方法
          this.page = swiper.realIndex + 1
          this.index = swiper.realIndex
        },
        //左右导航栏
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        //自动播放
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        //指示点
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        //循环
        loop: true,
      },
    }
  },
  //定义swiper对象
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },
  },
  //当Vue时实例被挂载时，调用slideTo方法
  mounted() {
    this.swiper.slideTo(0, 0, false)
  },
}
</script>

<style lang="less" scoped>
.swiper-container {
}
</style>

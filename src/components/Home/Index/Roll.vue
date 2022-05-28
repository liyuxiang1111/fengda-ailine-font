<template>
  <div>
    <swiper :options="swiperOption" class="swiper-container swiper-pagination1 w" ref="mySwiper">
    <!-- 添加的图片 -->
    <div class="block"></div>
    <swiper-slide class="slide-box" @mouseenter.native="on_bot_enter" @mouseleave.native="on_bot_leave">
      <div class="slide-container">
        <div class="img-box"><img class="banner-img" :src="imag1" /></div>
        <p class="title">丽江古城</p>
        <p class="info">阿瓦达久违的看我</p>
        <div class="detail">详细信息</div>
      </div>
    </swiper-slide>
    <swiper-slide class="slide-box" @mouseenter.native="on_bot_enter" @mouseleave.native="on_bot_leave"> 
      <div class="slide-container">
        <div class="img-box"><img class="banner-img" :src="imag6" /></div>
        <p class="title">丽江古城</p>
        <p class="info">阿瓦达久违的看我</p>
        <div class="detail">详细信息</div>
      </div>
    </swiper-slide>
    <swiper-slide class="slide-box" @mouseenter.native="on_bot_enter" @mouseleave.native="on_bot_leave">
      <div class="slide-container">
        <div class="img-box"><img class="banner-img" :src="imag1" /></div>
        <p class="title">丽江古城</p>
        <p class="info">阿瓦达久违的看我</p>
        <div class="detail">详细信息</div>
      </div>
    </swiper-slide>
    <swiper-slide class="slide-box" @mouseenter.native="on_bot_enter" @mouseleave.native="on_bot_leave">
      <div class="slide-container">
        <div class="img-box"><img class="banner-img" :src="imag2" /></div>
        <p class="title">丽江古城</p>
        <p class="info">阿瓦达久违的看我</p>
        <div class="detail">详细信息</div>
      </div>
    </swiper-slide>
    <swiper-slide class="slide-box" @mouseenter.native="on_bot_enter" @mouseleave.native="on_bot_leave">
      <div class="slide-container">
        <div class="img-box"><img class="banner-img" :src="imag3" /></div>
        <p class="title">丽江古城</p>
        <p class="info">阿瓦达久违的看我</p>
        <div class="detail">详细信息</div>
      </div>
    </swiper-slide>
    <swiper-slide class="slide-box" @mouseenter.native="on_bot_enter" @mouseleave.native="on_bot_leave">
      <div class="slide-container">
        <div class="img-box"><img class="banner-img" :src="imag4" /></div>
        <p class="title">丽江古城</p>
        <p class="info">阿瓦达久违的看我</p>
        <div class="detail">详细信息</div>
      </div>
    </swiper-slide>

    <!-- 左右导航栏 -->
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div> -->
    <template #button-prev>
      <div class="swiper-button-prev"></div>
    </template>
    <template #button-next>
      <div class="swiper-button-next"></div>
    </template>
    
  </swiper>
  <div class="advertisement w">更多特色服务<i class="el-icon-caret-right"></i></div>
  </div>
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
      nextTransForm:'',
      imag1: require(`@/assets/image/scenery/故宫.jpg`),
      imag2: require(`@/assets/image/scenery/九寨沟.jpg`),
      imag3: require(`@/assets/image/scenery/雷峰塔.jpg`),
      imag4: require(`@/assets/image/scenery/雷峰塔.jpg`),
      imag5: require(`@/assets/image/scenery/丽江古城.jpg`),
      imag6: require(`@/assets/image/scenery/丽江古城.jpg`),
      swiperOption: {
        freeMode: true,
        pagination: '.swiper-pagination1',
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 30,
        centeredSlides: true,
        allowTouchMove: false,//不允许触摸滑动
        speed: 4000, // 匀速时间
        watchSlidesProgress: true,
        preventClicks: false,//当swiper在触摸时不会阻止默认事件
        preventClicksPropagation: false,//当拖动swiper时阻止click时间
        autoplayDisableOnInteraction : false, /* 注意此参数，默认为true */
        // onSlideChangeEnd: (swiper) => {
        //   //放swiper的回调方法
        //   this.page = swiper.realIndex + 1
        //   this.index = swiper.realIndex
        // },
        //左右导航栏
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        //自动播放
        autoplay: {
          delay: 0,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        //循环
        loop: true,
      },
    }
  },
  methods: {
    on_bot_enter() {
      this.nextTransForm = this.swiper.$wrapperEl[0].style.transform;
      let nextTransPosition = -1 * parseInt(this.nextTransForm.split("px")[0].split("translate3d(")[1]);
      // // 鼠标悬浮时时轮播图位置
      let nowTransPosition = -1 * parseInt(window.getComputedStyle(this.swiper.$wrapperEl[0], false)["transform"].split("1, ")[2].split(",")[0]);
 
      // 存放鼠标悬浮时轮播图的真实transform属性（非行内属性）
      let nowTransForm = window.getComputedStyle(this.swiper.$wrapperEl[0], false)["transform"];
      
      // 计算轮播图从暂停位置移动到原本应到的位置所用的时间（150是我自定义的每个slide的宽度）
      this.nextTime = 4000 * ((nextTransPosition - nowTransPosition) / 150);
      this.swiper.$wrapperEl[0].style.transform = nowTransForm;
      
      this.swiper.$wrapperEl[0].style.transitionDuration = "0ms";
      this.swiper.autoplay.stop()
    },
    on_bot_leave() {
      this.swiper.$wrapperEl[0].style.transform = this.nextTransForm;
      this.swiper.$wrapperEl[0].style.transitionDuration = this.nextTime + "ms";
      this.swiper.autoplay.start()
    },
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
/deep/ .swiper-container-free-mode {
  .swiper-wrapper {
    -webkit-transition-timing-function: linear; /*之前是ease-out*/
    -moz-transition-timing-function: linear;
    -ms-transition-timing-function: linear;
    -o-transition-timing-function: linear;
    transition-timing-function: linear;
    margin: 0 auto;
  }
}
.swiper-container {
  position: relative;
  margin-top: 30px;
  background-color: #fff;
  height: 427px;
  margin: 0 auto;
  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-color: #ecf2f7;
  }
  .slide-box {
    position: relative;
    width: 216px;
    height: 327px;
    margin-top: 100px;
    background: linear-gradient(0deg, #98eaff, #a0c5ff);
    text-align: center;
    border-radius: 5px;
    .slide-container {
      position: absolute;
      top: -18px;
      left: 0;
      height: inherit;
      width: inherit;
      transition: all 0.8s;
      .img-box {
        text-align: center;
        margin: 0 15px 25px 15px;
        .banner-img {
          border-radius: 95px;
          top: -10px;
          width: 186px;
          height: 275px;
        }
      }
      .title {
        color: #0b446a;
        font-size: 18px;
        line-height: 26px;
        text-align: center;
      }
      .info {
        text-align: center;
        font-size: 12px;
        line-height: 26px;
        padding: 12px 0;
        color: #0b446a;
      }
      .detail {
        display: inline-block;
        border-radius: 20px;
        width: 90px;
        height: 30px;
        line-height: 30px;
        color: #357bd7;
        font-size: 12px;
        background-color: #fff;
      }
    }
    &:hover .slide-container {
      top: -100px;
    }
  }
}
.advertisement {
  text-align: center;
  color: #ff7c09;
  font-size: 14px;
  height: 50px;
  line-height: 50px;
  background: linear-gradient(90deg,#ffffdb,#ffe5bd);
  margin-bottom: 40px;
}
</style>

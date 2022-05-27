<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">slider1</div>
      <div class="swiper-slide">slider2</div>
      <div class="swiper-slide">slider3</div>
    </div>
  </div>
</template>

<script>
var Swiper = require('swiper');    
var mySwiper = new Swiper('.swiper-container', { /* ... */ });
var mySwiper = new Swiper('.swiper-container', {
	autoplay: true,//可选选项，自动滑动
})
</script>


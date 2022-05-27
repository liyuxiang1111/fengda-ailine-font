<template>
  <div class="home">
    <BigSwiper></BigSwiper>
    <Recommend/>
    <Roll></Roll>
  </div>
</template>

<script>
import BigSwiper from '@/components/Home/BigSwiper.vue'
import Recommend from '@/components/Home/Index/Recommend.vue'
import Roll from '@/components/Home/Index/Roll.vue'
export default {
  components: {
    BigSwiper,
    Recommend,
    Roll
  }
}
</script>

<style>

</style>
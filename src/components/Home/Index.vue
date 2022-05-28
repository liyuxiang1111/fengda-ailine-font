<template>
  <div class="home">
    <BigSwiper></BigSwiper>
    <Recommend/>
    <Roll></Roll>
    <Journey></Journey>
  </div>
</template>

<script>
import BigSwiper from '@/components/Home/BigSwiper.vue'
import Recommend from '@/components/Home/Index/Recommend.vue'
import Roll from '@/components/Home/Index/Roll.vue'
import Journey from '@/components/Home/Index/Journey.vue'
export default {
  components: {
    BigSwiper,
    Recommend,
    Roll,
    Journey
  }
}
</script>

<style>

</style>
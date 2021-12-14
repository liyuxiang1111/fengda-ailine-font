<template>
  <div class="order-contaienr">
    <Topbar></Topbar>
    <div class="order-box w">
      <Top></Top>
    </div>
  </div>
</template>

<script>
import Topbar from '@/components/Home/Tool/Topbar.vue'
import Top from '@/components/Home/Order/Top.vue'
export default {
  components: {
    Topbar,
    Top,
  },
}
</script>

<style></style>

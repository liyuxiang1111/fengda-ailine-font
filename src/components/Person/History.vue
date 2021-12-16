<template>
  <div class="history-container fr">
    <div class="history-box">我的历史订单</div>
    <Flaght></Flaght>
    <div class="page-box">
      <Page></Page>
    </div>
  </div>
</template>

<script>
import Flaght from '@/components/Person/History/Flaght.vue'
import Page from '@/components/Person/Page.vue'
export default {
  components: {
    Flaght,
    Page,
  },
}
</script>

<style lang="less" scoped>
.history-container {
  position: relative;
  width: 890px;
  padding: 15px;
  height: 540px;
  background-color: #ffffff;
  .history-box {
    height: 60px;
    padding: 0 20px;
    line-height: 60px;
    border-bottom: 1px solid #cddeea;
  }
  .page-box {
    position: absolute;
    left: 50%;
    margin: 0 -200px;
    bottom: 10px;
  }
}
</style>

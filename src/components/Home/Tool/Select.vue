<template>
  <div class="select-container">
    <Topbar></Topbar>
    <div class="select-box w">
      <!-- <el-empty description="空"></el-empty> -->
    </div>
  </div>
</template>

<script>
import Topbar from '@/components/Home/Tool/Topbar.vue'
export default {
  components: {
    Topbar,
  },
}
</script>

<style lang="less" scoped>
.select-container {
  background-color: #ecf2f7;
}
</style>

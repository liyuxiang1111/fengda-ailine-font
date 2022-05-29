<template>
  <div class="history-container fr boxshadow" v-loading="loading">
    <div class="history-box">我的历史订单</div>
    <el-empty v-show="history.length === 0" :image="require('@/assets/image/index/pre-flightFoot.webp')" description="鹅！你的历史没有订单" :image-size="300"></el-empty>
    <Flaght :ticketList="history">
      <template #pay="scope">
        <p>
          <span v-if="scope.ispay">已购无需操作</span>
          <el-popconfirm title="是否要重新购买？" v-else @confirm="pay(scope.id)"><span class="button" slot="reference">去购买</span></el-popconfirm>
        </p>
      </template>
    </Flaght>
  </div>
</template>

<script>
import Flaght from '@/components/Person/History/Flaght.vue'
export default {
  components: {
    Flaght,
  },
  data() {
    return {
      loading: true,
      history: [],
      pageNum: 0,
      pageSize: 3,
    }
  },
  created() {
    this.initHistory()
  },
  methods: {
    async initHistory() {
      this.loading = true
      await this.$http({
        url: '/pay/search',
        method: 'post',
        data: {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
        },
      }).then(({ data: res }) => {
        if (res.data === null) {
          this.$message({
            message: "购买成功！",
            type: 'success',
          })
        } else {
          this.history = res.data.dataList
          this.loading = false
        }
      })
    },
    // 去购买
   async pay(id) {
      await this.$http({
        url: '/buyer/again',
        method: 'post',
        headers: {
          Authorization: localStorage.getItem('Authorization'),
        },
        data: {
          payId: id,
        },
      }).then(({ data: res }) => {
        if (res.success) {
          this.$message({
            message: "购买成功！",
            type: 'success',
          })
          this.initHistory()
        } else {
          this.$message({
            message: "购买失败！",
            type: 'error',
          })
        }
      })
    },
  },
}
</script>

<style lang="less" scoped>
.history-container {
  position: relative;
  width: 890px;
  padding: 15px;
  height: 600px;
  background-color: #ffffff;
  .history-box {
    height: 60px;
    padding: 0 20px;
    line-height: 60px;
    border-bottom: 1px solid #cddeea;
  }
  .page-box {
    position: absolute;
    left: 40%;
    bottom: 10px;
  }
}
</style>

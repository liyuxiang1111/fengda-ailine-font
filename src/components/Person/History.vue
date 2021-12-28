<template>
  <div class="history-container fr boxshadow">
    <div class="history-box">我的历史订单</div>
    <Flaght :ticketList="history"></Flaght>
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
  data() {
    return {
      history: [],
      token: '',
      pageNum: 0,
      pageSize: 3,
    }
  },
  created() {
    this.token = localStorage.getItem('Authorizatio')
    this.initHistory()
  },
  methods: {
    async initHistory() {
      await this.$http({
        url: '/pay/search',
        method: 'post',
        headers: {
          Authorization: this.token,
        },
        data: {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
        },
      }).then(({ data: res }) => {
        if (res.data === null) {
          alert(res.msg)
        } else {
          console.log(res.data)
          this.history = res.data.dataList
          console.log('ok')
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
    left: 50%;
    margin: 0 -200px;
    bottom: 10px;
  }
}
</style>

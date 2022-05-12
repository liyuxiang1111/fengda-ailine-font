<template>
  <div class="ticket-container fr boxshadow" v-loading="loading">
    <div class="ticket-box">我的机票信息</div>
    <Flaght :ticketList="ticketList"></Flaght>
    <div class="page-box">
      <!-- <Page></Page> -->
    </div>
  </div>
</template>

<script>
import Flaght from '@/components/Person/Ticket/Flight.vue'
// import Page from '@/components/Person/Page.vue'
export default {
  created() {
    this.token = localStorage.getItem('Authorizatio')
    this.initTicketList()
  },
  components: {
    Flaght,
    //Page,
  },
  data() {
    return {
      loading: true,
      ticketList: [],
      token: '',
      pageNum: 0,
      pageSize: 3,
    }
  },
  methods: {
    async initTicketList() {
      this.loading = true
      await this.$http({
        url: '/ticket/search/normal',
        method: 'post',
        headers: {
          Authorization: localStorage.getItem('Authorization'),
        },
        data: {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
        },
      }).then(({ data: res }) => {
        if (res.data === null) {
          alert(res.msg)
        } else {
          this.ticketList = res.data.dataList
          this.loading = false
          // console.log(this.ticketList)
        }
      })
    },
  },
}
</script>

<style lang="less" scoped>
.ticket-container {
  position: relative;
  width: 890px;
  padding: 15px;
  height: 600px;
  background-color: #ffffff;
  border-radius: 5px;
  .ticket-box {
    height: 60px;
    padding: 0 20px;
    line-height: 60px;
    border-bottom: 1px solid #cddeea;
  }
  .page-box {
    position: absolute;
    left: 50%;
    bottom: 10px;
  }
}
</style>

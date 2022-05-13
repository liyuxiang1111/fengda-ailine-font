<template>
  <div class="ticket-container fr boxshadow" v-loading="loading">
    <div class="ticket-box">我的机票信息</div>
    <Flaght :ticketList="ticketList">
      <template #defalt="scope">
        <p>
          <el-popconfirm title="是否要退票吗？" @confirm="back($event, scope.ticketId)"><span class="button" slot="reference">退票</span></el-popconfirm>
          <span> | </span>
          <el-popconfirm title="是否要延期一天？" @confirm="change($event, scope.ticketDay, scope.ticketId)"><span class="button" slot="reference">改签</span></el-popconfirm>
        </p>
      </template>
    </Flaght>
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
          return
        } else {
          this.ticketList = res.data.dataList
          this.loading = false
          // console.log(this.ticketList)
        }
      })
    },
    // 子组件
    async back(e, id) {
      await this.$http({
        url: '/ticket/return',
        method: 'post',
        headers: {
          Authorization: this.token,
        },
        data: {
          ticketId: id,
          resource: '七天无理由',
        },
      }).then(({ data: res }) => {
        if (res.data === null) {
          this.$message({
            message: "退票成功！",
            type: 'success',
          })
          this.initTicketList()
        } else {
          this.$message({
            message: "退票失败！",
            type: 'error',
          })
        }
      })
    },
    async change(e, day, id) { 
      // 修改日期
      var arr = day.split('-')
      var ans = ''
      var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      if (month[arr[0] - 1] === parseInt(arr[1])) {
        if (arr[0] === '12') {
          ans = '1-'
        } else {
          ans = parseInt(arr[0]) + 1 + '-1'
        }
      } else {
        var flag = parseInt(arr[1]) + 1
        ans = arr[0] + '-' + flag
      }
      // http请求
      await this.$http({
        url: '/ticket/modify',
        method: 'post',
        headers: {
          Authorization: this.token,
        },
        data: {
          ticketDay: ans,
          ticketId: id,
        },
      }).then(({ data: res }) => {
        if (res.data === null) {
          this.$message({
            message: "改签成功！",
            type: 'success',
          })
        } else {
          this.$message({
            message: "改签成功！",
            type: 'error',
          })
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

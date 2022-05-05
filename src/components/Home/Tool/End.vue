<template>
  <div class="end-contaienr">
    <Topbar></Topbar>
    <div class="end-box w">
      <Success></Success>
    </div>
    <div class="flaght w">
      <Top></Top>
      <div class="sub-title">订单编号：{{ payId }}</div>
      <div class="passager">
        <table>
          <thead>
            <th>姓名</th>
            <th>机票价格</th>
            <th>保险</th>
            <th>机场建设费</th>
            <th>燃油税</th>
            <th>支付总额</th>
          </thead>
          <tbody>
            <td>{{ name }}</td>
            <td>¥{{ price }}</td>
            <td>¥0</td>
            <td>¥50</td>
            <td>¥20</td>
            <td class="price">¥{{ total }}</td>
          </tbody>
        </table>
      </div>
    </div>
    <div class="button-box w">
      <div class="button" @click="pay">支付订单</div>
    </div>
  </div>
</template>

<script>
import Topbar from '@/components/Home/Tool/Topbar.vue'
import Success from '@/components/Home/End/Success.vue'
import Top from '@/components/Home/Order/Top.vue'
export default {
  created() {
    this.price = localStorage.getItem('price')
    this.name = localStorage.getItem('price')
    this.total = parseInt(this.price) + 50 + 20
    this.payId = localStorage.getItem('payId')
  },
  data() {
    return {
      token: '',
      price: '',
      name: '',
      total: '',
      payId: '',
    }
  },
  components: {
    Topbar,
    Success,
    Top,
  },
  methods: {
    async endpay() {
      await this.$http({
        url: 'buyer/again',
        method: 'post',
        headers: {
          Authorization: localStorage.getItem('Authorizatio'),
        },
        data: {
          payId: localStorage.getItem('payId'),
        },
      }).then(({ data: res }) => {
        if (res.data === null) {
          alert('支付成功')
          this.$router.push('/home')
        }
      })
    },
    pay() {
      this.endpay()
    },
  },
}
</script>

<style lang="less" scoped>
.flaght {
  margin-top: 20px;
}
.sub-title {
  height: 40px;
  padding-left: 20px;
  line-height: 40px;
  background-color: #bae2ff;
  font-size: 14px;
  color: #1c53a1;
  background: #bae2ff;
}
.passager {
  height: 83px;
  padding: 20px;
  background-color: #ffffff;
  table {
    border-spacing: 0;
    th {
      width: 186px;
      height: 40px;
      background-color: #f1f7fd;
      color: #093a57;
      font-weight: 400;
      font-size: 12px;
      border: 1px solid #e1e4e7;
      line-height: 40px;
    }
    td {
      height: 40px;
      border: 1px solid #e1e4e7;
      line-height: 40px;
      text-align: center;
      font-weight: 400;
      font-size: 12px;
    }
    .price {
      color: #ff8214;
    }
  }
}
.button-box {
  margin: auto;
  margin-top: 70px;
  margin-bottom: 70px;
  height: 38px;
  width: 200px;
  text-align: center;
  line-height: 38px;
  background-color: #ff9b00;
  border-radius: 20px;
}
</style>

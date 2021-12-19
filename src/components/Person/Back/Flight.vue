<template>
  <div class="flight-contaienr">
    <div class="ticket">
      <div class="ticket-title">
        <img src="@/assets/image/smalllogo.png" alt="" />
        <span class="fr">飞机型号：播音747</span>
      </div>
      <div class="ticket-box">
        <div class="start fl">
          <span>11:30</span>
          <span>福州长乐</span>
        </div>
        <div class="active fl">---------------></div>
        <div class="end fl">
          <span>11:30</span>
          <span>福州长乐</span>
        </div>
        <div class="customer fl">乘客：一粒小傻子</div>
        <div class="day fr">
          <el-popconfirm title="确定要退票吗？" @confirm="back">
            <el-button slot="reference" class="back fr">退票</el-button>
          </el-popconfirm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      console.log('123')
    },
  },
}
</script>

<style lang="less" scoped>
.flight-contaienr {
  .ticket {
    position: relative;
    height: 80px;
    padding: 5px 10px;
    background-color: snow;
    .ticket-title {
      height: 20px;
      background-color: cornflowerblue;
      img {
        height: 15px;
        margin-left: 20px;
      }
    }
    .ticket-box {
      height: 60px;
      .start {
        width: 120px;
        padding: 10px 0;
        height: 40px;
        line-height: 45px;
        background-color: #e1f0fd;
        span {
          margin-right: 5px;
        }
      }
      .end {
        width: 120px;
        padding: 10px 0;
        height: 40px;
        line-height: 45px;
        background-color: #e1f0fd;
        span {
          margin-right: 5px;
        }
      }
      .active {
        width: 120px;
        padding: 10px 0;
        height: 40px;
        line-height: 45px;
        background-color: #e1f0fd;
      }
      .customer {
        width: 360px;
        padding: 10px 0;
        height: 40px;
        line-height: 45px;
        background-color: #e1f0fd;
      }
      .day {
        width: 150px;
        padding: 10px 0;
        height: 40px;
        line-height: 45px;
        background-color: #e1f0fd;
        .back {
          background-color: #ffa500;
          color: #ffffff;
        }
      }
    }
  }
}
</style>

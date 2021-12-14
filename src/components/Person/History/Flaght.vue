<template>
  <div class="flaght-contaienr">
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
        <div class="day fr">日期：2021/12/14</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.flaght-contaienr {
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
        background-color: pink;
        span {
          margin-right: 5px;
        }
      }
      .end {
        width: 120px;
        padding: 10px 0;
        height: 40px;
        line-height: 45px;
        background-color: pink;
        span {
          margin-right: 5px;
        }
      }
      .active {
        width: 120px;
        padding: 10px 0;
        height: 40px;
        line-height: 45px;
        background-color: pink;
      }
      .customer {
        width: 360px;
        padding: 10px 0;
        height: 40px;
        line-height: 45px;
        background-color: pink;
      }
      .day {
        width: 150px;
        padding: 10px 0;
        height: 40px;
        line-height: 45px;
        background-color: pink;
      }
    }
  }
}
</style>

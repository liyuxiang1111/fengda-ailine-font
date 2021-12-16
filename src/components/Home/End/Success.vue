<template>
  <div class="success-container">
    <div class="text">
      <div class="ico-success fl">123</div>
      <div class="success-text fl">
        <div class="sub-submit-text">预定成功，请您尽快付款，您的订单总金额为：￥460</div>
        <p>欢迎您选择凤达航空，请尽快完成支付</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.success-container {
  height: 110px;
  background-color: pink;
  padding: 20px;
  .text {
    position: relative;
    height: 70px;
    background-color: #effdda;
    padding: 23px 20px;
    .ico-success {
      width: 44px;
      height: 44px;
    }
    .success-text {
      position: relative;
      width: 700px;
      height: 70px;
      margin-left: 20px;
      .sub-submit-text {
        font-size: 16px;
        height: 18px;
        line-height: 18px;
        color: #4a7b00;
      }
      p {
        position: absolute;
        bottom: 0;
        font-size: 5px;
        color: #4a7b00;
      }
    }
  }
  .text::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 10px;
    height: 116px;
    background-color: #78c601;
  }
}
</style>

<template>
  <div class="topbar-container">
    <div class="topbar-box w">
      <li class="active fl">1.选择航班</li>
      <li class="order fl">2.填写订单</li>
      <li class="pay fl">3.确认付款</li>
      <li class="end fl">4.出票完成</li>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.topbar-container {
  height: 60px;
  background-color: #053e69;
  margin-bottom: 20px;
  .topbar-box {
    li {
      position: relative;
      width: 292px;
      height: 60px;
      text-align: center;
      line-height: 60px;
      background-color: #1389ff;
    }
    li:before {
      position: absolute;
      left: 0;
      content: '';
      border-top: 30px solid transparent;
      border-right: 30px solid transparent;
      border-bottom: 30px solid #053e69;
      border-left: 30px solid #053e69;
    }
    li:after {
      position: absolute;
      right: 0;
      content: '';
      border-top: 30px solid #053e69;
      border-right: 30px solid #053e69;
      border-bottom: 30px solid transparent;
      border-left: 30px solid transparent;
    }
  }
}
</style>

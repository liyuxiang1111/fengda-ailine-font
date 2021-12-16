<template>
  <div class="search-container w">
    <div class="top-btu">
      <div class="btn">单程</div>
    </div>
    <div class="text-btu">
      <div class="section-input text-first">
        <input type="text" class="account" placeholder="出发城市" tabindex="4" />
      </div>
      <div class="section-input">
        <input type="text" class="account" placeholder="到达城市" tabindex="4" />
      </div>
      <div class="data-box">
        <el-date-picker class="data" v-model="data" type="datetime" placeholder="选择日期时间" default-time="12:00:00"> </el-date-picker>
      </div>
      <div class="section-btn fr button">查询</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: '',
    }
  },
}
</script>

<style lang="less" scoped>
.search-container {
  height: 150px;
  border-radius: 5px;
  background-color: #ffffff;
  .top-btu {
    height: 50px;
    margin: 0 auto;
    border-bottom: 1px solid #e1e1e1;
    .btn {
      display: inline-block;
      width: 92px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      margin-top: 9px;
      margin-left: 10px;
      border-radius: 20px;
      background-color: orange;
    }
  }
  .text-btu {
    height: 99px;
    margin: 0 auto;
    background-color: #fff;
    .section-input {
      float: left;
      width: 160px;
      height: 40px;
      margin-top: 30px;
      margin-left: 30px;
      border: 1px dotted rgb(211, 208, 208);
      border-radius: 5px;
      input {
        margin-top: 10px;
        margin-left: 5px;
      }
    }
    .data-box {
      float: left;
      width: 160px;
      height: 40px;
      margin-top: 30px;
      margin-left: 30px;
      .data {
        width: 160px;
      }
    }
    .text-first {
      margin-left: 0;
    }
    .section-btn {
      display: inline-block;
      width: 160px;
      height: 40px;
      line-height: 40px;
      font-size: 17px;
      margin-top: 30px;
      text-align: center;
      color: #fff;
      background-color: orange;
      border-radius: 20px;
    }
  }
}
</style>

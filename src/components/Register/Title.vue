<template>
  <div class="title">
      <h2 class="fl">凤达航空会员注册</h2>
      <ul class="fr">
        <li class="fl" :class="{ stepbox: $route.path === '/register/step1'}"><span>1</span>基本信息</li>
        <li class="fl" :class="{ stepbox: $route.path === '/register/step2'}"><span>2</span>联系信息</li>
        <li class="fl" :class="{ stepbox: $route.path === '/register/step3'}"><span>3</span>注册完成</li>
      </ul>
  </div>
</template>
<script>

</script>
<style lang='less' scoped>
  .title {
    height: 50px;
    padding: 5px 10px;
    border-bottom: 3px solid #004385;
    h2 {
      margin-top: 10px;
    }
    ul {
      margin-top: 10px;
      li {
        width: 130px;
        margin-right: 10px;
        height: 36px;
        line-height: 36px;
        color: #b8b8b8;
        span {
          display: inline-block;
          height: 36px;
          width: 36px;
          margin-right: 10px;
          text-align: center;
          font-size: 14px;
          background-color: #b8b8b8;
          border-radius: 50%;
          color: #ffffff;
        }
      }
      .stepbox {
        margin-top: 0;
        color: #004385;
        span {
          background-color: #004385;
          border-radius: 50%;
          color: #ffffff;
        }
      }
    }
  }
</style>
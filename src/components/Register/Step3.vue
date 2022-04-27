<template>
  <div class="step1-container w white boxshadow">
    <div class="title">
      <h2 class="fl">凤达航空会员注册</h2>
      <ul class="fr">
        <li class="fl"><span>1</span> 基本信息</li>
        <li class="fl"><span>2</span>联系信息</li>
        <li class="fl step-box"><span class="step">3</span>注册完成</li>
      </ul>
    </div>
    <div class="information">
      <div class="text">
        <div class="ico-success fl icon iconfont">&#xe608;</div>
        <div class="success-text fl">
          <div class="sub-submit-text">恭喜您称为凤达航空大家庭中的一员</div>
          <p>可以点击下面按钮直接登录或者返回登录页登录</p>
        </div>
      </div>
      <div class="button login" @click="next">直接登录</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      telephone: '',
      mail: '',
    }
  },
  methods: {
    next() {
      console.log()
      this.$router.push('/login')
    },
  },
}
</script>

<style lang="less" scoped>
.step1-container {
  height: 539px;
  padding: 10px;
  background-color: #ffffff;
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
      .step-box {
        margin-top: 0;
        color: #004385;
        .step {
          background-color: #004385;
          border-radius: 50%;
          color: #ffffff;
        }
      }
    }
  }
  .information {
    margin: auto;
    height: 110px;
    background-color: #ffffff;
    padding: 20px;
    .text {
      position: relative;
      height: 70px;
      background-color: #effdda;
      padding: 23px 20px;
      .ico-success {
        width: 44px;
        height: 44px;
        font-size: 44px;
        color: #78c601;
      }
      .success-text {
        position: relative;
        width: 500px;
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
    .login {
      margin: auto;
      margin-top: 100px;
      height: 38px;
      width: 200px;
      text-align: center;
      line-height: 38px;
      background-color: #ff9b00;
      border-radius: 20px;
    }
  }
}
</style>

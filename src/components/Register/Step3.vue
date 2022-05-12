<template>
  <div class="step3-container w white boxshadow">
    <Title></Title>
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
import Title from '@/components/Register/Title.vue'
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
    components:{
    Title,
  },
}
</script>

<style lang="less" scoped>
.step3-container {
  height: 539px;
  padding: 10px;
  background-color: #ffffff;
  .information {
    margin: auto;
    height: 110px;
    background-color: #ffffff;
    padding: 20px;
    margin-top: 100px;
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

<template>
  <div class="panel-container">
    <form action="">
      <li class="tab">会员登录</li>
      <div class="menber-content">
        <div class="section-input">
          <inputBox class="acount" :id="'username'" :tip="usernameTip" :type="'text'" @shareText="getText"></inputBox>
        </div>
        <div class="section-input">
          <inputBox class="passwd" :id="'password'" :tip="passwdTip" :type="'password'" @shareText="getPwd"></inputBox>
        </div>
        <div class="section-input">
          <inputBox class="code fl" :id="'code'" :tip="codeTip" :type="'text'" @shareText="getCode"></inputBox>
          <!-- <input type="text" class="code fl" placeholder="验证码" v-model="code" @keydown.enter="login" /> -->
          <div class="fl" @click="changeCode()">
            <identify :identifyCode="identifyCode"></identify>
          </div>
        </div>
        <div class="button login-button" @click="login">登录</div>
      </div>
      <div class="fl">
        <router-link to="/register"> 注册 </router-link>
      </div>
      <div class="fr">
        <router-link to="">忘记密码</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import inputBox from '@/components/Login/Panel/Inputbox.vue'
import identify from '@/components/Login/Panel/identify.vue'
export default {
  mounted() {
    // 刷新页面就生成随机验证码
    this.identifyCode = ''
    this.makeCode(this.identifyCodes, 4)
  },
  data() {
    return {
      // 提示框
      userName: '',
      password: '',
      code: '',
      // tips
      usernameTip: '请输入用户名',
      passwdTip: '请输入密码',
      codeTip: '请输入验证码',
      // 验证码初始值
      identifyCode: 'm6a8', // 这个就是随机生成的验证码
      // 验证码的随机取值范围
      identifyCodes: '123456789abcdefghjkmnpqrstuvwxyz',
    }
  },
  methods: {
    // 获得用户名 可以判断用户名是否存在
    getText(val) {
      this.userName = val
      // 进行axios请求判断用户名是否存在
    },
    getPwd(val) {
      this.password = val
    },
    getCode(val) {
      this.code = val
    },
    // 账号是否存在验证
    async login() {
      if (this.userName === '' && this.password === '') {
        this.$message({
          message: '账号密码为空',
          type: 'error',
        })
      } else if (this.code === '' || this.code != this.identifyCode) {
        this.$message({
          message: '验证码有误请重新输入',
          type: 'error',
        })
      } else if (this.code === this.identifyCode) {
        await this.$http
          .post('/login', {
            userName: this.userName,
            userPwd: this.password,
          })
          .then(({ data: res }) => {
            if (res.data === null) {
              this.$message({
                message: res.msg,
                type: 'error',
              })
            } else {
              this.token = res.data
              localStorage.setItem('Authorization', res.data)
              this.$router.push('/home')
            }
          }, err => {
            console.log(err);
          }).catch()
      }
    },
    //  下一步按钮 拿到code值跟随机生成的验证码进行对比
    handleSubmit() {
      if (this.identifyCode != this.phone.code) {
        this.$toast('验证码不正确')
        this.changeCode() // 改变验证码
      } else {
        this.$toast('验证码正确')
      }
    },
    // 点击验证码刷新验证码
    changeCode() {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },
    // 生成一个随机整数  randomNum(0, 10) 0 到 10 的随机整数， 包含 0 和 10
    randomNum(min, max) {
      max = max + 1
      return Math.floor(Math.random() * (max - min) + min)
    },
    // 随机生成验证码字符串
    makeCode(data, len) {
      for (let i = 0; i < len; i++) {
        this.identifyCode += data[this.randomNum(0, data.length - 1)]
      }
    },
  },
  components: {
    identify,
    inputBox,
  },
}
</script>

<style lang="less">
.panel-container {
  position: absolute;
  top: 10vh;
  right: 15vw;
  width: 283px;
  height: 428px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  padding: 30px;
  .tab {
    border-bottom: 5px solid #4a81e8;
    text-align: center;
    color: #4a81e8;
  }
  .menber-content {
    width: 283px;
    height: 256px;
    padding-top: 15px;
    .section-input {
      width: 283px;
      height: 40px;
      margin-top: 20px;
      .acount {
        display: block;
        width: 222.9px;
        height: 40px;
        margin: auto;
        padding: 0 15px;
        border: 1px solid #bfba9f;
        border-radius: 15px;
      }
      .passwd {
        display: block;
        width: 222.9px;
        height: 40px;
        margin: auto;
        padding: 0 15px;
        border: 1px solid #bfba9f;
        border-radius: 15px;
      }
      .code {
        height: 40px;
        width: 99.25px;
        margin-left: 14px;
        margin-right: 8px;
        padding: 0 15px;
        border: 1px solid #bfba9f;
        border-radius: 15px;
      }
    }
    .login-button {
      width: 283;
      height: 40px;
      line-height: 40px;
      margin-top: 20px;
      text-align: center;
      background-color: #4a81e8;
    }
  }
}
</style>

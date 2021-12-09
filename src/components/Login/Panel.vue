<template>
  <div class="panel-container">
    <form action="">
      <li>会员登录</li>
      <div class="menber-content">
        <div class="section-input">
          <input type="text" name="请输入账号" class="acount" />
        </div>
        <div class="section-input">
          <input type="password" name="" id="" class="passwd" />
        </div>
        <div class="section-input">
          <input type="text" name="" id="" class="code" />
        </div>
        <div class="button login-button">登录</div>
      </div>
      <div class="fl">
        <router-link to=""> 注册 </router-link>
      </div>
      <div class="fr">
        <router-link to="">忘记密码</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scroped>
.panel-container {
  position: absolute;
  top: 160px;
  right: 300px;
  width: 343px;
  height: 428px;
  background-color: white;
  padding: 30px;
  .menber-content {
    width: 283px;
    height: 256px;
    background-color: pink;
    padding-top: 15px;
    .section-input {
      width: 283px;
      height: 40px;
      margin-top: 20px;
      .acount {
        display: block;
        width: 252.9px;
        height: 40px;
        margin: auto;
      }
      .passwd {
        display: block;
        width: 252.9px;
        height: 40px;
        margin: auto;
      }
      .code {
        height: 40px;
        width: 129.25px;
        margin-left: 14px;
      }
    }
    .login-button {
      width: 283;
      height: 40px;
      margin-top: 20px;
      text-align: center;
      background-color: skyblue;
    }
  }
}
</style>

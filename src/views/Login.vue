<template>
  <div class="login-container">
    <!-- 头部导航 -->
    <Nav></Nav>
    <div class="login-imag">
      <img src="@/assets/image/sky/6.png" alt="" />
      <img src="@/assets/image/air/air.png" alt="" class="air">
      <Panel></Panel>
    </div>
    <!-- 注册表 -->
    <!-- 底部栏 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from '@/components/Login/Nav.vue'
import Panel from '@/components/Login/Panel.vue'
import Footer from '@/components/Login/Footer.vue'
export default {
  components: {
    Nav,
    Footer,
    Panel,
  },
}
</script>

<style lang="less" scoped>
.login-container {
  width: 100%;
  .login-imag {
    position: relative;
    width: 100%;
    min-width: 1170px;
    height: calc(100vh - 200px);
    min-height: 700px;
    border-bottom: 1px solid #0c7ced;
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
    .air {
      position: absolute;
      left: 15%;
      top: 30%;
      width: 600px;
      height: 450px;
    }
  }
}
</style>

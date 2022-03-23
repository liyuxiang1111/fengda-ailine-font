<template>
  <div class="login-container">
    <!-- 头部导航 -->
    <Nav></Nav>
    <div class="login-imag">
      <img src="@/assets/image/sky/4.png" alt="" />
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
  .login-imag {
    position: relative;
    width: 100%;
    height: calc(100vh - 245px);
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>

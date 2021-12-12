<template>
  <div class="login-container">
    <!-- 头部导航 -->
    <Nav></Nav>
    <div class="login-imag">
      <img src="@/assets/image/壁纸1.jpeg" alt="" />
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

<style lang="less">
.login-container {
  .login-imag {
    margin-top: -5px;
    position: relative;
    height: 756px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

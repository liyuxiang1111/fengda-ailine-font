<template>
  <div class="home-container">
    <!-- 首页导航栏 -->
    <Nav></Nav>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="footer-box">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Home/Nav.vue'
import Select from '@/components/Home/Tool/Select.vue'
import Footer from '@/components/Login/Footer.vue'
export default {
  components: {
    Nav,
    Select,
    Footer,
  },
}
</script>

<style lang="less">
.home-container {
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #ecf2f7;
  .footer-box {
    margin-top: 60px;
  }
}
</style>

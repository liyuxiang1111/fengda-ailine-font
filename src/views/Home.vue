<template>
  <div class="home-container">
    <!-- 首页导航栏 -->
    <Nav></Nav>
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <Sidebar class="sidebar"></Sidebar>
    <Footer class="footer-box"></Footer>
    <Bottom class="bottom"></Bottom>
  </div>
</template>

<script>
import Nav from '@/components/Home/Nav.vue'
import Select from '@/components/Home/Tool/Select.vue'
import Footer from '@/components/Common/Footer.vue'
import Sidebar from '@/components/Home/Sidebar.vue'
import Bottom from '@/components/Home/Bottom.vue'
export default {
  components: {
    Nav,
    Select,
    Footer,
    Sidebar,
    Bottom
  },
}
</script>

<style lang="less">
.home-container {
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #ecf2f7;
  /* .content {
    margin-bottom: 60px;
  } */
  .footer-box {
    margin-top: 60px;
  }
  .sidebar {
    position: fixed;
    top: 50%;
    right: 0;
  }
}
</style>

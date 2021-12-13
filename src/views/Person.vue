<template>
  <div class="person-container">
    <Nav></Nav>
    <div class="person-box">
      <div class="content w">
        <Sidebar></Sidebar>
        <router-view></router-view>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from '@/components/Home/Nav.vue'
import Sidebar from '@/components/Person/Sidebar.vue'
import Footer from '@/components/Login/Footer.vue'
export default {
  components: {
    Sidebar,
    Nav,
    Footer,
  },
}
</script>

<style lang="less" scoped>
.person-container {
  .person-box {
    width: 100%;
    height: 600px;
    background-color: #ecf2f7;
    padding-top: 40px;
  }
}
</style>

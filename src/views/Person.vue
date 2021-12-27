<template>
  <div class="person-container">
    <Nav></Nav>
    <div class="person-box">
      <div class="content clearfix w">
        <Sidebar></Sidebar>
        <router-view></router-view>
      </div>
    </div>
    <Dialog></Dialog>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from '@/components/Home/Nav.vue'
import Sidebar from '@/components/Person/Sidebar.vue'
import Footer from '@/components/Login/Footer.vue'
import Dialog from '@/components/Dialog/Dialog.vue'
export default {
  components: {
    Sidebar,
    Nav,
    Footer,
    Dialog,
  },
}
</script>

<style lang="less" scoped>
.person-container {
  background-color: #ecf2f7;
  .person-box {
    width: 100%;
    height: 600px;

    padding-top: 40px;
    padding-bottom: 90px;
  }
}
</style>

<template>
  <div class="person-container">
    <Nav></Nav>
    <div class="person-box w">
      <div class="content clearfix">
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
import Footer from '@/components/Common/Footer.vue'
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
  width: 100%;
  .person-box {
    height: calc(100vh - 342px);
    padding-top: 60px;
    min-height: 630px;
    padding-bottom: 30px;
  }
}
</style>

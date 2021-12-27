<template>
  <div class="register-container">
    <!-- 头部栏 -->
    <Nav></Nav>
    <div class="step-box">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from '@/components/Login/Nav.vue'
import Stpe1 from '@/components/Register/Step1.vue'
import Step2 from '@/components/Register/Step2.vue'
import Step3 from '@/components/Register/Step3.vue'
import Footer from '@/components/Login/Footer.vue'
export default {
  components: {
    Nav,
    Stpe1,
    Step2,
    Step3,
    Footer,
  },
}
</script>

<style lang="less">
.register-container {
  background-color: #f5f5f5;
  .step-box {
    margin-top: 50px;
  }
}
</style>

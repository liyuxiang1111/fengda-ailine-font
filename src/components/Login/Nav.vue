<template>
  <div class="nav-container">
    <nav>
      <img src="" alt="" />
      <router-link to="/login"><img src="@/assets/image/logo.png" alt="" /></router-link>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.nav-container {
  nav {
    height: 60px;
    padding: 20px 0 0 30px;
    background-color: #ffffff;
    border-bottom: 4px solid #004385;
    img {
      height: 40px;
      float: left;
      margin-left: 50px;
    }
  }
}
</style>

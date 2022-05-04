<template>
  <div class="error-container w">
    <img src="@/assets/image/sky/3.png" alt="" />
    <h2>你的页面貌似走丢了</h2>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.error-container {
  position: relative;
  text-align: center;
  width: 100%;
  margin-bottom: -60px;
  img {
    width: 100%;
    height: 70vh;
  }
  h2 {
    position: absolute;
    left: calc(50% - 110px); /*calc(50% - 盒子宽度的一半)*/
    top: calc(50% - 25px);
    width: 220px;
    height: 50px;
    color: #ffa500;
  }
}
</style>

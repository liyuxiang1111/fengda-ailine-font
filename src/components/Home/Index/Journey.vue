<template>
  <div class="journey-container">
    <div class="w">
      <div class="tile">旅游优惠信息<router-link class="fr" to="">更多<i class="el-icon-search"></i></router-link></div>
    </div>
    <div class="travelInfo clearfix">

    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.journey-container {
  background-color: #fff;
  background: url('../../../assets/image/index/xiamen.jpg') no-repeat;
  background-size: cover;
  opacity: 0.9;
  .w {
    height: 390px;
    padding: 37px 0 70px 0;
    .tile {
      height: 30px;
      font-size: 20px;
      line-height: 30px;
      color: #fff;
      border-bottom: 1px solid #c3d8ea;
      a {
        display: block;
        color: #015c86;
        font-size: 12px;
        margin-right: 5px;
      }
    }
  }
}
</style>

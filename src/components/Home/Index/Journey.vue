<template>
  <div class="journey-container">
    <div class="w">
      <div class="tile">凤航文化<router-link class="fr" to="">更多<i class="el-icon-search"></i></router-link></div>
      <div class="content">
        <p>The ongoing way is long and rough.</p>
        <p>I can see no end.</p>
        <p>But I will devote myself to the endless seeking of truth.</p>
        <p>路漫漫其修远兮。</p>
        <p>吾将上下而求索。---屈原</p>
      </div>
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
    .content {
      padding: 10px 0 10px 0;
      p {
        margin: 10px 0 10px 0;
        color: #fff;
      }
    }
  }
}
</style>

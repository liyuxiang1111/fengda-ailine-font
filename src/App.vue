<template>
  <div class="app-container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f5f5f5;
  a {
    text-decoration: none;
  }
  li {
    list-style: none;
  }
  em,
  i {
    font-style: normal;
  }
  img {
    border: 0;
    vertical-align: middle;
  }
  .button {
    cursor: pointer;
  }
  .color {
    background-color: #f5f5f5;
  }
  .white {
    background-color: #ffffff;
  }
  .boxshadowcolor {
    box-shadow: 0 2px 4px 0 var(--cb-color-shadow, rgba(0, 0, 0, 0.16));
  }
  button,
  input {
    font-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, '\5B8B\4F53', sans-serif;
    border: 0;
    outline: none;
  }
  .clearfix:before,
  .clearfix:after {
    content: '';
    display: table;
  }

  .clearfix:after {
    clear: both;
  }

  .clearfix {
    *zoom: 1;
  }
  .fl {
    float: left;
  }
  .fr {
    float: right;
  }
  .w {
    width: 1170px;
    margin: 0 auto;
  }
}
</style>

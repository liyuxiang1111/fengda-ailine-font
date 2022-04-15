<template>
  <div class="app-container">
    <router-view></router-view>
  </div>
</template>

<style lang="less">
@import url(./assets/less/value.less);
body {
  height: 1000px;
  width: 100%;
}
* {
  @font-face {
    font-family: 'iconfont';
    src: url('./assets/css/iconfont.woff2?t=1639906299268') format('woff2'), url('./assets/css/iconfont.woff?t=1639906299268') format('woff'),
      url('./assets/css/iconfont.ttf?t=1639906299268') format('truetype');
  }
  .iconfont {
    font-family: 'iconfont' !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  margin: 0;
  padding: 0;
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
  .white {
    background-color: #ffffff;
  }
  .boxshadow {
    box-shadow: 0px 0px 3px 3px #e2e3e3;
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

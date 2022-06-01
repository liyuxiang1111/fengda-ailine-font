<template>
  <div class="app-container">
    <router-view></router-view>
  </div>
</template>

<style lang="less">
@import url(./assets/less/value.less);
* {
  margin: 0;
  padding: 0;
  @font-face {
    font-family: 'iconfont';
    src: url('./assets/fonts/iconfont.woff2?t=1639906299268') format('woff2'), url('./assets/fonts/iconfont.woff?t=1639906299268') format('woff'),
      url('./assets/fonts/iconfont.ttf?t=1639906299268') format('truetype');
  }
  .iconfont {
    font-family: 'iconfont' !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    width: 100%;
    height: 100%;
    font-size: 62.5%!important;
    color: #474747;
  }
  body {
    font-family: 'Microsoft YaHei', 'Hiragino Sans GB', 'Arail';
    -webkit-box-sizing: border-box;
    margin: 0;
    background: #eee;
  }
  a {
    text-decoration: none;
    color: #4778A7;
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
    box-shadow: 0px 0px 3px 3px rgba(193, 187, 187, .6);
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
  [v-cloak] {
    display:none !important;
  }
}
</style>

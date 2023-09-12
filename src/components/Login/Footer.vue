<template>
  <div class="footer w">
    <div class="fl">
      <ul>
        <li><a href="https://beian.miit.gov.cn/" target="_blank">闽ICP备2021015104号-2</a></li>
      </ul>
    </div>
    <div class="fr">
      <ul>
        <li><router-link to="/home">凤航首页</router-link></li>
        <li>|</li>
        <li><router-link to="">凤航简介</router-link></li>
        <li>|</li>
        <li><router-link to="">凤航货运</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.footer {
  padding: 10px 0;
  height: 30px;
  line-height: 30px;
  font-size: 10px;
  font-family: 'Helvetica', 'Hiragino Sans GB W3', arial, sans-serif;
}
.fl {
  ul {
    li {
      float: left;
      margin-right: 4rem;
      color: #515151;
      a {
        color: inherit;
      }
    }
  }
}
.fr {
  ul {
    li {
      float: left;
      margin-left: 2rem;
      &:last-of-type {
        margin-left: 0;
      }
    }
  }
}
</style>
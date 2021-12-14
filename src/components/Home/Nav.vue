<template>
  <div class="nav-container">
    <div class="w">
      <div class="fl nav-left">
        <span class="fl"><img src="@/assets/image/logo.png" alt="" /></span>
      </div>
      <ul class="tool fl">
        <li class="fl">
          <router-link to="/home"><div>回到主页</div></router-link>
        </li>
        <li class="fl">
          <router-link to="/person/ticket"><div>我的机票</div></router-link>
        </li>
        <li class="fl">
          <router-link to="/person/back"><div>退票处理</div></router-link>
        </li>
        <li class="fl">
          <router-link to="/person/history"><div>查看历史</div></router-link>
        </li>
      </ul>
      <div class="fr nav-right">
        <router-link to="/person"><img src="@/assets/image/一栗小莎子.jpeg" alt="" /> <span>一粒小傻子</span></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.nav-container {
  height: 80px;
  padding: 0 30px;
  background-color: #ffffff;
  border: 1px solid #d7d7d7;
  .nav-left {
    margin: 26px 60px 25px 0;
    span {
      margin-right: 100px;
      img {
        height: 30px;
        width: 200px;
      }
    }
  }
  .tool {
    li {
      a {
        div {
          height: 76px;
          line-height: 76px;
        }
        div:hover {
          border-bottom: 5px solid #316ad0;
        }
      }
      margin-right: 100px;
    }
  }
  .nav-right {
    margin: 25px 0 25px 0;
    img {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      margin-right: 15px;
    }
  }
  .tool-box {
    margin-top: 81px;
  }
}
</style>

<template>
  <div class="sidebar-container fl">
    <div class="man">
      <img src="@/assets/image/一栗小莎子.jpeg" alt="" />
      <span>一粒小傻子</span>
    </div>
    <router-link to=""><li class="person-information">我的个人信息</li></router-link>
    <router-link to=""><li class="air-ticket">我的机票信息</li></router-link>
    <router-link to="/person/history"><li class="history">历史订单</li></router-link>
    <router-link to=""><li class="back">退票处理</li></router-link>

    <router-link to=""><li>积分越换</li></router-link>
    <router-link to=""><li>会员专区</li></router-link>
    <router-link to=""><li class="logout">退出登录</li></router-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.sidebar-container {
  width: 250px;
  height: 500px;
  background-color: pink;
  .man {
    padding: 15px;
    border-bottom: 1px solid #cddeea;
    img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
    span {
      margin-left: 15px;
    }
  }
  a {
    li {
      padding: 15px;
      height: 30px;
      line-height: 30px;
    }
  }
}
</style>

<template>
  <div class="sidebar-container fl boxshadow">
    <div class="man">
      <img src="@/assets/image/一栗小莎子.jpeg" alt="" />
      <span>一粒小傻子</span>
    </div>
    <router-link to="/person/userinfo"
      ><li class="person-information"><span class="iconfont">&#xe617;</span>我的个人信息</li></router-link
    >
    <router-link to="/person/ticket"
      ><li class="air-ticket"><span class="iconfont">&#xe66f;</span>我的机票信息</li></router-link
    >
    <router-link to="/person/history"
      ><li class="history"><span class="iconfont">&#xe8d5;</span>历史订单</li></router-link
    >
    <router-link to="/person/back"
      ><li class="back"><span class="iconfont">&#xe684;</span>退票处理</li></router-link
    >

    <router-link to=""
      ><li><span class="iconfont">&#xe617;</span>积分越换</li></router-link
    >
    <router-link to=""
      ><li><span class="iconfont">&#xe886;</span>会员专区</li></router-link
    >
    <router-link to="" @click.native="logout"
      ><li><span class="iconfont">&#xe601;</span>退出登录</li></router-link
    >
  </div>
</template>

<script>
import bus from '@/components/eventBus.js'
export default {
  data() {
    return {
      dialogVisible: true,
    }
  },
  components: {},
  methods: {
    logout() {
      bus.$emit('dialog', this.dialogVisible)
    },
  },
}
</script>

<style lang="less" scoped>
.sidebar-container {
  width: 240px;
  height: 496px;
  background-color: #ffffff;
  border-radius: 10px;
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
      font-size: 14px;
      color: #999;
      span {
        margin-right: 10px;
      }
    }
    li:hover {
      background-color: #90d7ec;
    }
  }
}
</style>

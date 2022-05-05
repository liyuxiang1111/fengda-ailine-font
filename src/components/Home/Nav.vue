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
      <div class="userInfo nav-right" @mouseover="show = true">
        <router-link v-if="this.token === null" to="/login"><span class="nav-login">登录</span></router-link>
        <router-link v-else to="/person"
          ><img ref="img" src="@/assets/image/头像.png" alt="" /> <span>{{ $store.state.name }}</span></router-link
        >
        <!-- <ul > -->
        <transition v-if="this.token !== null" name="el-fade-in-linear">
          <ul ref="info" v-show="show" @mouseleave="show = false">
            <li>
              <router-link to="/person/userinfo">个人信息</router-link>
            </li>
            <li>
              <router-link to="/person/ticket">机票信息</router-link>
            </li>
            <li>
              <router-link to="/person/back">退票信息</router-link>
            </li>
            <li>
              <router-link to="/person/history">历史订单</router-link>
            </li>
            <li>
              <router-link to="" @click.native="logout">退出登录</router-link>
            </li>
          </ul>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      flag: true,
      token: null ,
    }
  },
  components: {},
  methods: {
    logout() {
      this.$router.push('/login')
    },
    img() {
      console.log('img')
    },
    getToken(){
      this.token = localStorage.getItem('Authorization');
    }
  },
  created(){
    this.getToken()
  },
}
</script>

<style lang="less" scoped>
@import url(../../assets/less/value.less);
.nav-container {
  height: 80px;
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
        color: #492d22;
        font-weight: normal;
        font-size: 14px;
        div {
          height: 76px;
          line-height: 76px;
          transition: all 0.1s;
          &:hover {
            border-bottom: 5px solid #1781b5;
          }
        }
      }
      margin-right: 100px;
    }
  }
  .nav-right {
    position: relative;
    padding: 25px 10px 25px 0;
    a {
      color: #492d22;
      font-weight: normal;
      font-size: 14px;
      img {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        margin-right: 15px;
      }
    }
  }
  .userInfo {
    float: right;
    position: relative;
    z-index: 5;
    ul {
      top: 70px;
      left: -40px;
      position: absolute;
      width: 100px;
      &::before {
        position: absolute;
        content: '';
        left: 45px;
        top: -10px;
        width: 0;
        height: 0;
        line-height: 0;
        font-size: 0;
        border: 5px solid transparent;
        border-bottom-color: @bkg-color;
      }
      li {
        line-height: 40px;
        height: 40px;
        padding: 0.2rem 0 0.2rem 0;
        background-color: @bkg-color;
        &:hover {
          background-color: #918081;
          a {
            color: #fff;
          }
        }
        a {
          text-align: center;
          display: block;
          color: #a59d97;
          font-weight: normal;
          font-size: 8px;
          width: 100%;
          height: 100%;
        }
      }
    }
    .nav-login {
      margin: 0;
      padding: 29px 110px 25px 0;
    }
  }
  .tool-box {
    margin-top: 81px;
  }
}
</style>

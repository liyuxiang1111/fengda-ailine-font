<template>
  <div class="nav-container" >
    <div class="w">
      <div class="fl nav-left">
        <span class="fl"><img src="@/assets/image/logo.png" alt="" /></span>
      </div>
      <ul class="tool fl">
        <li class="fl" @mouseenter="member = true">
          <router-link to=""><div>凤航会员</div></router-link>
        </li>
        <li class="fl">
          <router-link to=""><div>预定管理</div></router-link>
        </li>
        <li class="fl">
          <router-link to=""><div>互动专区</div></router-link>
        </li>
        <li class="fl">
          <router-link to=""><div>出行帮助</div></router-link>
        </li>
      </ul>
      <div class="userInfo nav-right" @mouseenter="show = true" >
        <router-link v-show="flag" to="/login" ><span class="nav-login">登录</span></router-link>
        <router-link v-show="!flag" to="/person"
          ><img ref="img" src="@/assets/image/头像.png" alt="" /> <span v-cloak>{{ $store.state.name }}</span></router-link
        >
        <!-- <ul > -->
        <transition v-if="!flag" name="el-fade-in-linear">
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
    <transition name="fade">
      <Imformation v-if="member" @mouseleave.native="member = false" class="imformation clearfix">
      <template #left>
        <div class="imformation-left fl">
          <p class="title">经常出差?</p>
          <p class="title-tip">称为凤航会员</p>
          <div class="btns clearfix">
            <router-link class="fl sign" to="">注册</router-link>
            <router-link class="fr login" to="">登录</router-link>
          </div>
          <p class="title-tip">使用手机快速买票</p>
          <router-link class="large-btn" to="">非会员快速购票</router-link>
        </div>
      </template>
      <template #right>
        <div class="imformation-right clearfix fr">
          <span class="content fl" v-for="item,index in imformation" :key="index">
            <router-link to="" class="title-tip">{{ item.title }}</router-link>
            <p>{{ item.introduce }}</p>
          </span>
        </div>
      </template>
    </Imformation>
    </transition>
  </div>
</template>

<script>
import Imformation from '@/components/Home/Index/Imformathion.vue'
export default {
  created(){
    this.getToken()
  },
  data() {
    return {
      imformation: [
        {title:"白鹭会员", introduce: "白鹭俱乐部"},
        {title:"白鹭会员", introduce: "白鹭俱乐部"},
        {title:"白鹭会员", introduce: "白鹭俱乐部"},
        {title:"白鹭会员", introduce: "白鹭俱乐部"},
        {title:"白鹭会员", introduce: "白鹭俱乐部"},
        {title:"白鹭会员", introduce: "白鹭俱乐部"},
      ],
      show: false,
      flag: true,
      token: '',
      member: false,
    }
  },
  components: {
    Imformation
  },
  methods: {
    logout() {
      this.$router.push('/login')
      localStorage.removeItem('Authorization')
    },
    img() {
      console.log('img')
    },
    async getToken(){
      this.token = localStorage.getItem('Authorization')
      // 获取用户信息接口：
      await this.$http({
        url: 'passenger',
        method: 'get',
        headers: {
          Authorization: this.token,
        },
      }).then(({ data: res }) => {
        // userinfo
        if (!res.success) {
          this.flag = true
        } else {
          this.flag = false
          this.$store.state.name = res.data.nickName
        }
      })
    }
  },
  watch:{

  }
}
</script>

<style lang="less" scoped>
@import url(../../assets/less/value.less);
@import url(../../assets/less/mixture.less);
.nav-container {
  position: relative;
  height: 80px;
  background-color: #ffffff;
  border-bottom: 2px solid #999;
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
          &:hover {
            border-bottom: 3px solid #1781b5;
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
  .imformation {
    overflow: hidden;
    transition: all .3s;
    .imformation-left {
    height: 200px;
    width: 220px;
    margin-right: 40px;
    .title {
      font-size: 22px;
      color: #456191;
      line-height: 22px;
      margin-bottom: 10px;
    }
    .title-tip {
      font-size: 12px;
      line-height: 16px;
      color: #456191;
    }
    .btns {
      height: 59px;
      border-bottom: 1px solid gray;
      margin-bottom: 20px;
      .sign,.login {
        width: 90px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border-radius: 20px;
        margin: 18px 0 10px;
        background-color: pink;
        font-size: 12px;
      }
      .login {
        background-color: blue;
      }
    }
    .large-btn {
      // display: block;
      margin-top: 10px; 
      .wh(130px, 30px);
      .bgc(pink);
      .border(20px);
      .fc(30px);
      .font(12px)
    }
    }
    .imformation-right {
      .wh(740px, 247px);
      .content {
        margin: 0 20px 30px 0;
        width: 226px;
        .title-tip {
          display: block;
          font-size: 14px;
          line-height: 14px;
          color: #0b325e;
          border-bottom: 1px solid rgb(202, 214, 233);
          padding-bottom: 15px;
          margin-bottom: 10px;
        }
        p {
          color: #888888;
          font-size: 12px;
          line-height: 20px;
        }
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    height: 274px;
    transition: height .3s;
 }
 .fade-enter, .fade-leave-to  {
    height: 0;
  }
  
}
</style>

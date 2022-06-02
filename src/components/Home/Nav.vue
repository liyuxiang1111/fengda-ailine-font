<template>
  <div class="nav-container" >
    <div class="w">
      <div class="fl nav-left">
        <router-link to="/home"><span class="fl"><img src="@/assets/image/logo.png" alt="图片走丢了" /></span></router-link>
      </div>
      <ul class="tool fl">
        <li class="fl" @mouseenter="member">
          <router-link to=""><div>凤航会员</div></router-link>
        </li>
        <li class="fl" @mouseenter="reserve">
          <router-link to=""><div>预定管理</div></router-link>
        </li>
        <li class="fl" @mouseenter="interact"> 
          <router-link to=""><div>互动专区</div></router-link>
        </li>
        <li class="fl" @mouseenter="trip">
          <router-link to=""><div>出行帮助</div></router-link>
        </li>
      </ul>
      <div class="userInfo nav-right" @mouseenter="navFlag = false,show = true" >
        <router-link v-show="flag" to="/login" >
        <span class="nav-login">登录</span>
        </router-link>
        <router-link v-show="!flag" to="/person"
          ><img ref="img" src="@/assets/image/头像.png" alt="" /> <span v-cloak>{{ $store.state.name }}</span></router-link
        >
        <!-- <ul > -->
        <transition v-if="!flag" name="el-fade-in-linear">
          <ul ref="info" v-show="show" @mouseleave="navFlag = false,show = false">
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
      <Imformation v-if="navFlag" @mouseleave.native="navFlag = false,imformation =[]" class="imformation clearfix">
      <template #left>
        <div v-if="flag" class="imformation-left fl">
          <p class="title">经常出差?</p>
          <p class="title-tip">成为凤航会员</p>
          <div class="btns clearfix">
            <router-link class="fl sign" to="/register">注册</router-link>
            <router-link class="fr login" to="/login">登录</router-link>
          </div>
          <p class="title-tip">使用手机快速买票</p>
          <router-link class="large-btn" to="">非会员快速购票</router-link>
        </div>
        <div v-else class="imformation-left fl">
          <img class="qr-code" src="@/assets/image/index/qrcode_sanlulou107.top.png" alt="图片加载失败">
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
      imformation: [],
      memberImformation: [
        {title:"凤航会员", introduce: "管理您的账户，查看最新会员资讯"},
        {title:"我的账户", introduce: "查看积分余额、乘机明细进行账户设置"},
        {title:"我的订单", introduce: "在线管理厦航订单，可在网上进行更改与取消"},
        {title:"赚取积分", introduce: "乘坐厦航集团航班、合作伙伴航空公司航班、乘坐合作商家处理消费即可累积"},
        {title:"积分兑换", introduce: "兑换奖励机票及积分商城特色商品"},
        {title:"优惠专区", introduce: "凤航会员专属折扣产品、额外奖励产品及专项优惠商家"},
      ],
      reserveImformation: [
        {title:"机票预定", introduce: "在线预定机票，快捷更高效"},
        {title:"我的账户", introduce: "在线查询航班动态，获取最新航班信息"},
        {title:"办理登机", introduce: "在线办理登机手续，为您的出行提供更多方便"},
        {title:"提前选座", introduce: "官网及95557购票用户，在线选择心仪的航班座位"},
        {title:"附加服务", introduce: "购买更多附加服务，官网更实惠"},
        {title:"客票验真", introduce: "在线查询机票真伪，安全更放心"},
      ],
      interactImformation: [
        {title:"国内热门推荐", introduce: "私人定制式国内航班推荐"},
        {title:"国外热门推荐", introduce: "私人定制式一站式服务"},
        {title:"国内外优惠", introduce: "了解更多多内外航班优惠信息"},
        {title:"低价早知道", introduce: "设置邮件及信息提醒服务，关系航线价格，低价早知道"},
        {title:"我要报名", introduce: "在这里您可以了解厦航的最新活动信息"},
        {title:"优惠信息", introduce: "了解最新促销信息，优惠产品"},
      ],
      tripImformation: [
        {title:"购票服务", introduce: "查询附近销售网点"},
        {title:"出行准备", introduce: "疫情期间无忧出行"},
        {title:"中转服务", introduce: "了解您的中转出行秘书"},
        {title:"地面服务", introduce: "办理登机服务、头等舱旅客休息室、延误行李查询、遗留物品领取须知"},
        {title:"客舱服务", introduce: "温馨服务、座位布局图、机上餐食、机上娱乐"},
        {title:"运输规定", introduce: "运输总条件、国内运输客票使用条件、航班超售处置规定、行李运输规定"},
      ],
      show: false,
      flag: true, // 用户是否登录的判断
      navFlag: false, // nav下拉选项
    }
  },
  components: {
    Imformation
  },
  methods: {
    // 注销
    logout() {
      this.$router.push('/login')
      localStorage.removeItem('Authorization')
    },
    // 获得用户信息
    async getToken(){
      // 获取用户信息接口：
      await this.$http({
        url: 'passenger',
        method: 'get',
      }).then(({ data: res }) => {
        // userinfo
        if (!res.success) {
          this.flag = true
        } else {
          this.flag = false
          this.$store.state.name = res.data.nickName
        }
      })
    },
    // 凤航会员
    member() {
      this.navFlag = true
      this.imformation = this.memberImformation
    },
    // 预定管理修改
    reserve() {
      this.navFlag = true
      this.imformation = this.reserveImformation
    },
    // 互动专区
    interact() {
      this.navFlag = true
      this.imformation = this.interactImformation
    },
    // 出行帮助
    trip() {
      this.navFlag = true
      this.imformation = this.tripImformation
    }
  },
}
</script>

<style lang="less" scoped>
@import url(../../assets/less/value.less);
@import url(../../assets/less/mixture.less);
.nav-container {
  position: relative;
  height: 80px;
  background-color: #ffffff;
  border-bottom: 1px solid #fff;
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
            border-bottom: 4px solid #1781b5;
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
    z-index: 999;
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
      padding: 29px 0px 25px 0;
    }
  }
  .tool-box {
    margin-top: 81px;
  }
  .imformation {
    overflow: hidden;
    transition: all .3s;
    box-shadow: 0 4px 6px -2px #8e8e8e;
    .imformation-left {
    height: 200px;
    width: 220px;
    margin-right: 40px;
    .qr-code {
      height: 100%;
      width: 100%;
    }
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
        background: url("../../assets/image/index/btn-orange.png");
        background-size: cover;
        color: #fff;
        font-size: 12px;
      }
      .login {
        background: url("../../assets/image/index/btn-blue.png");
        background-size: cover;
      }
    }
    .large-btn {
      display: block;
      margin-top: 10px; 
      .wh(130px, 30px);
      color: #fff;
      background: url("../../assets/image/index/btn-orange.png");
      background-size: cover;
      .border(20px);
      .fc(30px);
      font-size: 12px;
    }
    }
    .imformation-right {
      .wh(740px, 247px);
      margin-right: 50px;
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

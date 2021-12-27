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
      <div @mouseleave="show = false" class="fr nav-right">
        <router-link @mouseover.native="show = true" to="/person"><img src="@/assets/image/一栗小莎子.jpeg" alt="" /> <span>一粒小傻子</span></router-link>
        <transition name="el-fade-in-linear">
          <li @mouseleave="show = false" v-show="show">
            <span></span>
            <router-link to="/person/userinfo">个人信息</router-link> |
            <router-link to="" @click.native="logout">退出</router-link>
          </li>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import bus from '@/components/eventBus.js'
export default {
  data() {
    return {
      dialogVisible: true,
      show: false,
      flag: true,
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
        color: #515151;
        font-weight: normal;
        font-size: 14px;
        div {
          height: 76px;
          line-height: 76px;
        }
        div:hover {
          border-bottom: 5px solid #1781b5;
        }
      }
      margin-right: 100px;
    }
  }
  .nav-right {
    position: relative;
    padding: 25px 0 25px 0;
    height: 30px;
    a {
      color: #515151;
      font-weight: normal;
      font-size: 14px;
      img {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        margin-right: 15px;
      }
    }
    li {
      position: absolute;
      top: 60px;
      z-index: 3;
      margin-top: 5px;
      height: 25px;
      line-height: 25px;
      background-color: #f5f5f5;
      border-radius: 8px;
      span {
        position: absolute;
        left: 5px;
        top: -10px;
        width: 0;
        height: 0;
        line-height: 0;
        font-size: 0;
        border: 5px solid transparent;
        border-bottom-color: #f5f5f5;
      }
      a {
        color: #515151;
        font-weight: normal;
        font-size: 8px;
      }
    }
  }
  .tool-box {
    margin-top: 81px;
  }
}
</style>

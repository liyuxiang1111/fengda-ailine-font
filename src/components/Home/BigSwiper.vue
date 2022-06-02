<template>
  <div class="big-swiper">
    <transition name="el-fade-in-linear">
      <a class="content-img" ref="img" :style="{background:'url('+imgs[i]+')'}"></a>
    </transition>
    <div class="content-box w">
      <div class="notice-box">
        <div class="notice fl" ref="notice" :class="{top:isTop}">
          <div v-for="item,index in notices" :key="index">
            <i class="el-icon-message-solid"></i><span>{{ item }}</span>
          </div>
        </div>
        <div class="more fr"><router-link to="">查看更多</router-link></div>
      </div>
      <Search class="advertise" :i="i"></Search>
      <ul class="dot">
        <li 
          v-for="(num,index) in imgs.length" 
          :class="index == i ? 'select' : 'noselect'" 
          :key="num" 
          @click="i = index">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Search from '@/components/Home/Index/Search.vue'
export default {
  components : {
    Search
  },
  data() {
    return {
      isTop: false,
      show: true,
      timer: null, // 轮播图计时器
      noticeTimer: null,
      i :0, // 轮播图的
      j :0,
      imgs : [
        require("@/assets/image/season/chuntian.jpg"),
        require("@/assets/image/season/xiatian.jpg"),
        require("@/assets/image/season/qiutian.jpg"),
        require("@/assets/image/season/dongtian.jpg"),
      ],
      notices: [
        "关于调整国内航线旅客运输燃油附加费的通告（2022年5月）",
        "关于新冠肺炎疫情期间乘机出行注意事项的通知（2022年4月26日更新）",
        "关于更新北京航线国内客票特殊处理规则的通知",
        "关于更新长春、郑州航线国内客票特殊处理规则的通知",
      ]
    }
  },
  methods: {
    nextPic() {
      this.i++;
      if (this.i == 4) {
        this.i = 0;
      }
    },
    nextTip() {
      this.isTop = true
      setTimeout(() => {
        this.notices.push(this.notices[0])
        this.notices.shift()
        this.isTop = false
      }, 5000)
    }
  },
  mounted() {
    this.timer = setInterval(this.nextPic,8000)
    this.noticeTimer = setInterval(this.nextTip, 2000)
  },
  computed: {
    notice() {
      return this.$refs.notice
    },
    bottomLength() {
      return this.notices.length * 30
    }
  },
  destroyed() {
    clearInterval(this.noticeTimer)
    clearInterval(this.timer)
  }
}
</script>

<style lang="less" scoped>
.big-swiper {
  position: relative;
  height: 590px;
  width: 100%;
  min-width: 1170px;
  .photoshow {
    animation: faded 8s;
  }
  .content-img {
    display: block;
    width: inherit;
    height: inherit;
    background-position: left top !important;
    background-repeat:no-repeat !important;
    background-size: 100% 100%  !important;
    transition: opacity 2s;
    -moz-transition: opacity 2s; /* Firefox 4 */
    -webkit-transition: opacity 2s; /* Safari 和 Chrome */
    -o-transition: opacity 2s; /* Opera */  
  }
  .photo-show {
    animation: faded 2s;
  }
  .content-box {
    position: absolute;
    display:  inline-block;
    height: 590px;
    top: 0;
    left: 50%;
    margin-left: -585px;
    .advertise {
      position: absolute;
      top: 20%;
      left: 10%;
      width: 500px;
    }
    .notice-box {
      overflow: hidden;
      margin-top: 15px;
      height: 30px;
      line-height: 30px;
      background-color: #0f5e9c;
      opacity: .7;
      color: #fff;
      font-size: 12px;
      .notice {
        position: relative;
        i {
          margin-left: 15px;
          margin-right: 5px;
          color: orange;
        }
      }
      .top {
        transition: all 0.5s;
        margin-top: -30px;
      }
      .more {
        background-color: #1a84d5;
        padding: 0 5px;
        a {
          color: #fff;
        }
      }
      &:hover {
        opacity: 1;
      }
    }
    .dot {
      position: absolute;
      bottom: 100px;
      right: 30px;
      li {
        float: left;
        height: 12px;
        width: 12px;
        border-radius: 50%;
        margin: 3px 5px;
        background-color: #fff;
      }
      .select {
        border-color: rgba(0, 0, 0, 0.4);
        background-color: hsla(0, 0%, 100%, 0.3);
      }
      .noselect {
        border-color: hsla(0, 0%, 100%, 0.3);
        background: rgba(0, 0, 0, 0.4);
      }
    }
  }
}
</style>
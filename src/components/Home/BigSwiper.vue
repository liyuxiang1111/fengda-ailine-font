<template>
  <div class="big-swiper">
    <transition name="el-fade-in-linear">
      <a class="content-img" ref="img" :style="{background:'url('+imgs[i]+')'} "></a>
    </transition>
    <div class="content-box w">
      <div class="notice-box">
        <div class="notice fl" ref="notice" :style="bottom">
          <div v-for="item,index in notices" :key="index">
            <i class="el-icon-message-solid"></i><span>{{ item }}</span>
          </div>
        </div>
        <div class="more fr"><router-link to="">查看更多</router-link></div>
      </div>
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
export default {
  data() {
    return {
      bottom: {bottom: 120 + 'px'},
      show: true,
      timer: null, // 轮播图计时器
      noticeTimer: null,
      i :0, // 轮播图的
      j :0,
      imgs : [
        require("@/assets/image/sky/1.png"),
        require("@/assets/image/sky/2.png"),
        require("@/assets/image/sky/3.png"),
        require("@/assets/image/sky/4.png"),
      ],
      notices: [
        "经济发展具有强大韧性和活力4",
        "经济发展具有强大韧性和活力1",
        "经济发展具有强大韧性和活力2",
        "经济发展具有强大韧性和活力3",
        "经济发展具有强大韧性和活力4",
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
      if (this.j == 4) {
        this.j = 0
        this.notice.style.transitionDuration = "0s"
        this.notice.style.bottom = 120 + 'px'
      } 
      this.j++
      this.notice.style.bottom = 120 -  30 * this.j  + 'px'
    }
  },
  mounted() {
    // this.timer = setInterval(this.nextPic,3000)
    this.noticeTimer = setInterval(this.nextTip, 2000)
  },

  computed: {
    notice() {
      return this.$refs.notice
    },
    bottomLength() {
      console.log(this.notices.length);
      return this.notices.length * 30
    }
  },
  destroyed() {
    clearInterval(this.noticeTimer)
  }
}
</script>

<style lang="less" scoped>
.big-swiper {
  position: relative;
  height: 590px;
  width: 100%;
  min-width: 1170px;
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
  .content-box {
    position: absolute;
    display:  inline-block;
    height: 590px;
    top: 0;
    left: 50%;
    margin-left: -585px;
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
        transition: all 1s;
        position: relative;
        i {
          margin-left: 15px;
          margin-right: 5px;
          color: orange;
        }
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
<template>
  <div class="big-swiper">
    <transition name="el-fade-in-linear">
      <a class="content-img" ref="img" :style="{background:'url('+imgs[i]+')'} "></a>
    </transition>
    <div class="content-box w">
      <div class="notice-box">
        <div class="notice fl" ref="notice">
          <div v-for="item,index in notices" :key="index">
            <i class="el-icon-message-solid"></i><span>{{ item }}</span>
          </div>
        </div>
        <div class="more fr"><router-link to="">查看更多</router-link></div>
      </div>
      <ul class="dot">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
        "经济发展具有强大韧性和活力",
        "辽宁63名中小银行一把手缘何被查？",
        "辽宁63名中小银行一把手缘何被查？",
        "辽宁63名中小银行一把手缘何被查？",
        "经济发展具有强大韧性和活力",
      ]
    }
  },
  methods: {
    // 封装过渡动画
    animation(ele, target) {
      clearInterval(ele.timer);
      ele.timer = setInterval(() => {
        //获取起使位置
        leader= ele.offsetLeft;
        //获取缓动动画步长
        var step = (target-leader)/10;
        //支持不同方向的移动，所以步长有正有负
        step = step >0? Math.ceil(step):Math.floor(step);
        //当前位置= 盒子的位置+步长
        leader = leader +step;
        ele.style.left = leader+"px";
        if(ele.offsetLeft === target) {
          clearInterval(ele.timer);
        }
      }, 30)
    },
    nextPic() {
      this.i++;
      if (this.i == 4) {
        this.i = 0;
      }
    },
    nextTip() {
      if (this.j == 4) {
        this.j = 0
      }
      this.notice.style.transform = `translateY(${30 * this.j ++}px)`
    }
    // async interval(delay, callback) {
    //   return await new Promise((resolve, reject) => {
    //     let id = setInterval(() => {
    //       callback(id, resolve)
    //     }, delay)
    //     return reject
    //   }) 
    // }
  },
  mounted() {
    // this.timer = setInterval(this.nextPic,3000)
    this.noticeTimer = setInterval(this.nextTip, 2000)
  },
  computed: {
    notice() {
      return this.$refs.notice
    }
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
        bottom: 90px;
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
    }
  }
}
</style>
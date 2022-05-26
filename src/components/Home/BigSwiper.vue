<template>
  <div class="big-swiper">
    <transition name="el-fade-in-linear">
      <a class="content-img" ref="img" :style="{background:'url('+imgs[i]+')'} "></a>
    </transition>
    <div class="content-box w">
      <div class="notice-box">
        <div class="notice fl"><i class="el-icon-message-solid"></i>123</div>
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
import { setTimeout } from 'timers';

export default {
  data() {
    return {
      show: true,
      timer: null, // 计时器
      i :0,
      imgs : [
        require("@/assets/image/sky/1.png"),
        require("@/assets/image/sky/2.png"),
        require("@/assets/image/sky/3.png"),
        require("@/assets/image/sky/4.png"),
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
    this.timer = setInterval(this.nextPic,3000)
  },
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
      margin-top: 15px;
      height: 30px;
      line-height: 30px;
      background-color: #0f5e9c;
      opacity: .7;
      color: #fff;
      font-size: 12px;
      .notice {
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
      bottom: 30px;
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
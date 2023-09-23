<template>
  <div class="topbar-container">
    <div ref="active" class="topbar-box w">
      <div class="step active"><span class="icon iconfont">&#xe602;</span>1.选择航班</div>
      <!-- <li class=""><span class="icon iconfont">&#xe602;</span>1.选择航班</li> -->
      <div class="order"><span class="icon iconfont">&#xe60e;</span>2.填写订单</div>
      <div class="pay"><span class="icon iconfont">&#xe616;</span>3.确认付款</div>
      <div class="end"><span class="icon iconfont">&#xe613;</span>4.出票完成</div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.hash = this.$route.path
  },
  mounted() {
    this.init()
  },
  data() {
    return {
      hash: '',
    }
  },
  methods: {
    init() {
      if (this.hash == '/home/order') {
        this.$refs.active.childNodes[0].className = 'active iconfont'
        this.$refs.active.childNodes[1].className = 'step order iconfont'
      } else if (this.hash == '/home/pay') {
        this.$refs.active.childNodes[0].className = 'active iconfont'
        this.$refs.active.childNodes[2].className = 'step pay iconfont'
      } else if (this.hash == '/home/end') {
        this.$refs.active.childNodes[0].className = 'active iconfont'
        this.$refs.active.childNodes[3].className = 'step end iconfont'
      }
    },
  },
}
</script>

<style lang="less" scoped>
.topbar-container {
  height: 60px;
  background-color: #d0dfe6;
  margin-bottom: 20px;
  .topbar-box {
    overflow: hidden;
    height: 60px;
    div {
      // display: inline-block;
      float: left;
      width: 292px;
      min-width: 292px;
      height: 58px;
      text-align: center;
      line-height: 58px;
      color: #257fd9;
      .icon {
        font-size: 25px;
        margin-right: 15px;
      }
    }
    .step {
      position: relative;
      background-color: #2f71bd;
      color: #ffffff;
      &::before {
        position: absolute;
        left: 0;
        content: '';
        border-top: 30px solid transparent;
        border-right: 30px solid transparent;
        border-bottom: 30px solid #d0dfe6;
        border-left: 30px solid #d0dfe6;
      }
      &::after {
        position: absolute;
        right: 0;
        content: '';
        border-top: 30px solid #d0dfe6;
        border-right: 30px solid #d0dfe6;
        border-bottom: 30px solid transparent;
        border-left: 30px solid transparent;
      }
    }
  }
}
</style>

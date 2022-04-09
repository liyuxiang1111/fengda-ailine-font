<template>
  <div class="topbar-container">
    <div ref="active" class="topbar-box w">
      <li class="step active fl"><span class="icon iconfont">&#xe602;</span>1.选择航班</li>
      <li class="order fl"><span class="icon iconfont">&#xe60e;</span>2.填写订单</li>
      <li class="pay fl"><span class="icon iconfont">&#xe616;</span>确认付款</li>
      <li class="end fl"><span class="icon iconfont">&#xe613;</span>4.出票完成</li>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route.path)
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
        this.$refs.active.childNodes[0].className = 'active fl iconfont'
        this.$refs.active.childNodes[1].className = 'step order fl iconfont'
      } else if (this.hash == '/home/pay') {
        this.$refs.active.childNodes[0].className = 'active fl iconfont'
        this.$refs.active.childNodes[2].className = 'step pay fl iconfont'
      } else if (this.hash == '/home/end') {
        this.$refs.active.childNodes[0].className = 'active fl iconfont'
        this.$refs.active.childNodes[3].className = 'step end fl iconfont'
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
    li {
      position: relative;
      width: 292px;
      height: 60px;
      text-align: center;
      line-height: 60px;
      color: #257fd9;
      .icon {
        font-size: 25px;
        margin-right: 15px;
      }
    }
    .step {
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

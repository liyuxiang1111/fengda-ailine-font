<template>
  <div class="topbar-container">
    <div ref="active" class="topbar-box w">
      <li class="step active fl">1.选择航班</li>
      <li class="order fl">2.填写订单</li>
      <li class="pay fl">3.确认付款</li>
      <li class="end fl">4.出票完成</li>
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
        this.$refs.active.childNodes[0].className = 'active fl'
        this.$refs.active.childNodes[1].className = 'step order fl'
      } else if (this.hash == '/home/pay') {
        this.$refs.active.childNodes[0].className = 'active fl'
        this.$refs.active.childNodes[2].className = 'step pay fl'
      } else if (this.hash == '/home/end') {
        this.$refs.active.childNodes[0].className = 'active fl'
        this.$refs.active.childNodes[3].className = 'step end fl'
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
    }
    .step {
      background-color: #2f90b9;
    }
    .step:before {
      position: absolute;
      left: 0;
      content: '';
      border-top: 30px solid transparent;
      border-right: 30px solid transparent;
      border-bottom: 30px solid #d0dfe6;
      border-left: 30px solid #d0dfe6;
    }
    .step:after {
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
</style>

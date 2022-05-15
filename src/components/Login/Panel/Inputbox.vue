<template>
  <div class="inputbox">
    <!--利用autocomplete 取消默认用户输入建议-->
    <input :type="type" name="" :id="id" autocomplete="off" @focus="focus($event)" @blur="blur($event)" v-model="text" />
    <div id="tip" ref="tip">{{ tip }}</div>
  </div>
</template>

<script>
export default {
  props: {
    tip: String,
    type: String,
    id: String,
  },
  data() {
    return {
      text: '',
    }
  },
  methods: {
    focus(e) {
      // 取得焦点后输入框与tip
      this.$refs.tip.style.top = '-1rem'
      this.$refs.tip.style.backgroundColor = '#fff'
      this.$refs.tip.style.fontSize = '1px'
      this.$refs.tip.style.color = '#1a73e8'
    },
    blur(e) {
      if (this.text === '') {
        this.$refs.tip.style.top = '0.7rem'
        this.$refs.tip.style.fontSize = '0.5rem'
        this.$refs.tip.style.color = '#5f6368'
      }
    },
  },
  updated() {
    this.$emit('shareText', this.text)
  },
}
</script>

<style lang="less" scoped>
.inputbox {
  position: relative;
  input {
    width: inherit;
    height: inherit;
    outline: none; /*取消聚焦后的黑框框*/
    border-radius: 8px;
  }
  div {
    position: absolute; /*设置绝对定位， 那么给父级元素添加相对定位*/
    top: 0.7rem;
    left: 1rem;
    padding: 0 0.1rem;
    font-size: 0.5rem;
    font-weight: 80;
    font-family: roboto, 'Noto Sans Myanmar UI', arial, sans-serif;
    letter-spacing: 0.1px; /*字体间的空隙*/
    color: #5f6368;
    pointer-events: none;
    transition: all 0.15s ease; /*给div设置过渡动画*/
    -moz-transition:all 0.15s ease;
    -webkit-transition:all 0.15s ease;
    -o-transition:all 0.15s ease;
  }
}
</style>

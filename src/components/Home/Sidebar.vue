<template>
  <div class="sidebar">
    <div class="top"  @click="setTop"><i class="el-icon-top" style="font-size:30px;margin-top: 10px;"></i></div>
    <div class="content">
      <ul>
        <li><span class="icon iconfont icon-xinlangweibo"></span></li>
        <li><span class="icon iconfont icon-xinlangweibo"></span></li>
        <li><span class="icon iconfont icon-weixin"></span></li>
        <li><span class="icon iconfont icon-douyin"></span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
		setTop() {
			// 这里是重点
			document.documentElement.scrollTop = 0;
		},
	},
}
</script>

<style lang="less" scoped>
.sidebar {
  .font() {
    color: #fff;
    font-size: 20px;
    line-height: 40px;
  }
  width: 50px;
  .top {
    height: 50px;
    background-color: gray;
    opacity: 0.3;
    text-align: center;
    margin-bottom: 20px;
    i {
      color: #fff;
    }
  }
  .content {
    ul {
      li {
        height: 39px;
        background-color: #57b7de;
        padding: 5px;
        border-bottom: 1px solid #fff;
        text-align: center;
        .icon-douyin,.icon-weixin,.icon-xinlangweibo {
          .font()
        }
      }
    }
  }
}
</style>
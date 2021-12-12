<template>
  <div class="nav-container">
    <div class="w">
      <div class="fl nav-left">
        <span class="fl">凤达航空欢迎您</span>
      </div>
      <ul class="tool fl">
        <li class="fl">
          <router-link to=""><div>功能区</div></router-link>
        </li>
        <li class="fl">
          <router-link to=""><div>功能区</div></router-link>
        </li>
        <li class="fl">
          <router-link to=""><div>功能区</div></router-link>
        </li>
        <li class="fl">
          <router-link to=""><div>功能区</div></router-link>
        </li>
      </ul>
      <div class="fr nav-right">
        <img src="@/assets/image/一栗小莎子.jpeg" alt="" />
        <span>一粒小傻子</span>
      </div>
    </div>
    <div class="tool-box">
      <div class="w">
        <Tool1></Tool1>
      </div>
    </div>
  </div>
</template>

<script>
import Tool1 from '@/components/Home/Tool/Tool1.vue'
export default {
  components: {
    Tool1,
  },
}
</script>

<style lang="less" scoped>
.nav-container {
  height: 80px;
  padding: 0 30px;
  background-color: skyblue;
  border: 1px solid #d7d7d7;
  .nav-left {
    margin: 31px 60px 25px 0;
    span {
      margin-right: 100px;
    }
  }
  .tool {
    li {
      a {
        div {
          height: 80px;
          line-height: 80px;
        }
        div:hover {
          border-bottom: blue;
        }
      }
      margin-right: 100px;
    }
  }
  .nav-right {
    margin: 25px 0 25px 0;
    img {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      margin-right: 15px;
    }
  }
  .tool-box {
    margin-top: 81px;
  }
}
</style>

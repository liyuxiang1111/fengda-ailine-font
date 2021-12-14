<template>
  <div class="select-container">
    <Topbar></Topbar>
    <Search></Search>
    <Pricetabel></Pricetabel>
    <div class="w">
      <div class="flaght-box">
        <div class="flaght-info-title">单程：厦门-福州 <span>2021-12-13</span></div>
        <ul class="sort-box">
          <li class="fr">123</li>
          <li class="fr">123</li>
          <li class="fr">123</li>
        </ul>
        <div class="title"><img src="@/assets/image/smalllogo.png" alt="" /></div>
        <div class="flaght-info">
          <div class="info fl clearfix">
            <div class="start fl">
              <div class="time">07:25</div>
              <div class="place">福州长乐</div>
            </div>
            <div class="active fl">
              <span class="total-time">3小时15分</span>
              <div class="line">123</div>
            </div>
            <div class="end fl">
              <div class="time">07:25</div>
              <div class="place">福州长乐</div>
            </div>
          </div>
          <li class="price-item fr">
            <div class="price-conbin">全部</div>
            <div class="price-num">￥1233起</div>
          </li>
        </div>
        <div class="cabin-item">123</div>
      </div>
      <!-- <div class="advertisement fr">123</div> -->
    </div>
    <div class="select-box w">
      <!-- <el-empty description="空"></el-empty> -->
    </div>
  </div>
</template>

<script>
import Topbar from '@/components/Home/Tool/Topbar.vue'
import Search from '@/components/Home/Select/Search.vue'
import Pricetabel from '@/components/Home/Select/Pricetabel.vue'
export default {
  components: {
    Topbar,
    Search,
    Pricetabel,
  },
}
</script>

<style lang="less" scoped>
.select-container {
  background-color: #ecf2f7;
}
</style>

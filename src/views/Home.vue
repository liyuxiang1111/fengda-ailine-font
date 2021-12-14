<template>
  <div class="home-container">
    <!-- 首页导航栏 -->
    <Nav></Nav>

    <router-view></router-view>

    <div class="footer-box">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Home/Nav.vue'
import Select from '@/components/Home/Tool/Select.vue'
import Footer from '@/components/Login/Footer.vue'
export default {
  components: {
    Nav,
    Select,
    Footer,
  },
}
</script>

<style lang="less">
.home-container {
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #ecf2f7;
  .flaght-box {
    margin-top: 15px;
    width: 872px;
    .flaght-info-title {
      padding-left: 20px;
      height: 40px;
      line-height: 40px;
      background-color: #2f71bd;
      span {
        margin-left: 10px;
      }
    }
    .sort-box {
      height: 50px;
      background-color: #ffffff;
      line-height: 50px;
      li {
        padding: 0 12px;
      }
    }
    .advertisement {
      width: 300px;
    }
    .title {
      height: 52px;
      background-color: #bdd6ea;
      line-height: 52px;
      img {
        height: 26px;
        padding-left: 30px;
      }
    }
    .flaght-info {
      height: 80px;
      padding-left: 30px;
      background-color: #e1f0fd;
      .info {
        height: 60px;
        width: 407px;
        padding: 10px 0;
        .start {
          width: 76px;
          height: 60px;
          .time {
            color: #39424c;
            font-size: 30px;
            height: 42px;
          }
          .place {
            color: #39424c;
            font-size: 12px;
            height: 17px;
          }
        }
        .active {
          .total-time {
            display: block;
            width: 160px;
            height: 17px;
            color: #7d8995;
            font-size: 7px;
            text-align: center;
          }
        }
        .end {
          width: 76px;
          height: 60px;
          .time {
            color: #39424c;
            font-size: 30px;
            height: 42px;
          }
          .place {
            color: #39424c;
            font-size: 12px;
            height: 17px;
          }
        }
      }
      .price-item {
        height: 58px;
        width: 100px;
        padding: 11px 0;
        .price-conbin {
          padding-top: 5px;
          text-align: center;
        }
        .price-num {
          padding: 12px 0 5px;
          font-size: 18px;
          font-weight: 700;
          line-height: 1;
          color: #ff8214;
          text-align: center;
        }
      }
    }
    .cabin-item {
      height: 50px;
      padding-left: 30px;
      background-color: #ffffff;
    }
  }
}
</style>

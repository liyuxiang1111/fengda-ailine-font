<template>
  <div class="select-container">
    <Topbar></Topbar>
    <Search></Search>
    <Pricetabel></Pricetabel>
    <div class="clearfix w">
      <div class="flaght-box fl">
        <div class="flaght-info-title">单程：厦门-福州 <span>2021-12-13</span></div>
        <ul class="sort-box">
          <li class="fr button">其他排序</li>
          <li class="fr button">出发时刻从早到晚</li>
          <li class="fr button">价格从高到低</li>
        </ul>
        <div class="title"><img src="@/assets/image/smalllogo.png" alt="" /></div>
        <div>
          <div class="flaght-info">
            <div class="info fl clearfix">
              <div class="start fl">
                <div class="time">07:25</div>
                <div class="place">福州长乐</div>
              </div>
              <div class="active fl">
                <span class="total-time">3小时15分</span>
                <div class="line">---------------------></div>
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
          <div class="cabin-item">
            <div class="site fl">经济舱</div>
            <div class="price fl"><span>￥</span><strong>123</strong><span>起</span></div>
            <div class="residue fr">剩余票数</div>
            <div class="fr button">预定</div>
          </div>
          <div class="cabin-item">
            <div class="site fl">经济舱</div>
            <div class="price fl"><span>￥</span><strong>123</strong><span>起</span></div>
            <div class="residue fr">剩余票数</div>
            <div class="fr button">预定</div>
          </div>
          <div class="cabin-item">
            <div class="site fl">经济舱</div>
            <div class="price fl"><span>￥</span><strong>123</strong><span>起</span></div>
            <div class="residue fr">剩余票数</div>
            <div class="fr button">预定</div>
          </div>
        </div>
      </div>
      <!-- <div class="advertisement fr">123</div> -->
      <div class="select-box w">
        <!-- <el-empty description="空"></el-empty> -->
      </div>
      <div class="swiper-box fl">
        <Swiper></Swiper>
        <div class="advertisement">广告位招租</div>
      </div>
    </div>
  </div>
</template>

<script>
import Topbar from '@/components/Home/Tool/Topbar.vue'
import Search from '@/components/Home/Select/Search.vue'
import Pricetabel from '@/components/Home/Select/Pricetabel.vue'
import Swiper from '@/components/Home/Swiper.vue'
export default {
  components: {
    Topbar,
    Search,
    Pricetabel,
    Swiper,
  },
}
</script>

<style lang="less" scoped>
.select-container {
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
      height: 30px;
      padding: 10px 0;
      padding-left: 30px;
      padding-right: 12px;
      background-color: #ffffff;
      border-bottom: 1px solid #ebeceb;
      line-height: 30px;
      .site {
        width: 90px;
        height: 27px;
      }
      .price {
        span {
          color: #999;
          font-size: 12px;
        }
        strong {
          color: #ff8214;
          font-size: 18px;
          font-weight: 400;
        }
      }
      .residue {
        color: #ff8214;
        font-size: 12px;
        margin-left: 10px;
      }
      .button {
        width: 80px;
        line-height: 30px;
        text-align: center;
        background-color: #a3d6ff;
        color: #ffffff;
        border-radius: 20px;
      }
    }
  }
  .swiper-box {
    width: 274px;
    height: 137px;
    padding: 12px;
    .advertisement {
      margin-top: 15px;
      height: 200px;
      text-align: center;
      line-height: 150px;
      background-color: #ffa500;
    }
  }
}
</style>

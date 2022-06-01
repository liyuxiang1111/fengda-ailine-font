<template>
  <div class="select-container">
    <Topbar></Topbar>
    <Search @shareCity="getCity"></Search>
    <Pricetabel></Pricetabel>
    <div class="clearfix w">
      <div class="flaght-box fl boxshadow" v-loading="loading">
        <div class="flaght-info-title">
          单程：{{ city.beginCity }} - {{ city.endCity }}
          <span>{{ date }}</span>
        </div>
        <ul class="sort-box">
          <li class="fr button">其他排序</li>
          <li class="fr button" @click="time" ref="time">
            <span class="iconfont">&#xe8c5;</span>出发时刻从早到晚
          </li>
          <li class="fr button" @click="price" ref="price">
            <span class="iconfont">&#xe8ba;</span> 价格从低到高
          </li>
        </ul>
        <div v-if="dataList.length != 0">
          <div v-for="item in dataList" :key="item.flightId">
            <div class="title">
              <img src="@/assets/image/smalllogo.png" alt="" />
            </div>
            <!-- <div v-for="item in dataList" :key="item.flightId"> -->
            <div class="flaght-info">
              <div class="info fl clearfix">
                <div class="start fl">
                  <div class="time">{{ item.beginTime }}</div>
                  <div class="place">{{ item.beginCity }}</div>
                </div>
                <div class="active fl">
                  <span class="total-time">3小时15分</span>
                  <div class="line"></div>
                </div>
                <div class="end fl">
                  <div class="time">{{ item.endTime }}</div>
                  <div class="place">{{ item.endCity }}</div>
                </div>
              </div>
              <li class="price-item fr">
                <div
                  class="price-conbin button"
                  @click="
                    item.status = !item.status;
                    chang($event, item.status);
                    ticketnum($event, item.flightId);
                  "
                >
                  全部
                </div>
                <div class="price-num">
                  <span class="icon">￥</span> {{ item.lastPrice }}
                  <span class="icon">起</span>
                </div>
              </li>
            </div>
            <div v-if="item.status" v-loading="loadingNum[item.flightId]">
              <div class="cabin-item">
                <div class="site fl">普通舱</div>
                <div class="price fl">
                  <span>￥</span><strong>{{ item.businessPrice }}</strong
                  ><span>起</span>
                </div>
                <div class="residue fr" v-if="num[item.flightId] != null">还剩{{ num[item.flightId].businessSeat}}张</div>
                <div class="fr button" @click="pay($event, item.businessPrice, 0, item.flightId,num[item.flightId].businessSeat,  item.beginTime, item.endTime, item.beginCity, city.endCity)">预定</div>
              </div>
              <div class="cabin-item">
                <div class="site fl">经济舱</div>
                <div class="price fl">
                  <span>￥</span><strong>{{ item.economyPrice }}</strong
                  ><span>起</span>
                </div>
                <div class="residue fr" v-if="num[item.flightId] != null">还剩{{ num[item.flightId].economySeat}}张</div>
                <div class="fr button" @click="pay($event, item.economyPrice, 1, item.flightId, num[item.flightId].economySeat, item.beginTime, item.endTime, item.beginCity, city.endCity)">预定</div>
              </div>
              <div class="cabin-item">
                <div class="site fl">商务仓</div>
                <div class="price fl">
                  <span>￥</span><strong>{{ item.firstPrice }}</strong
                  ><span>起</span>
                </div>
                <div class="residue fr" v-if="num[item.flightId] != null">还剩{{ num[item.flightId].firstSeat }}张</div>
                <div class="fr button" @click="pay($event, item.firstPrice, 2, item.flightId, num[item.flightId].firstSeat, item.beginTime, item.endTime, item.beginCity, city.endCity)">预定</div>
              </div> 
            </div>
            <!-- <seat :Childitem="Childitem" :key="item.flightId"></seat> -->
          </div>
        </div>
        <div class="select-box" v-else>
          <el-empty description="空"></el-empty>
        </div>
      </div>
      <!-- <div class="advertisement fr">123</div> -->

      <div class="swiper-box fl">
        <Swiper></Swiper>
        <div class="advertisement boxshadow">广告位招租</div>
      </div>
    </div>
  </div>
</template>

<script>
import Topbar from "@/components/Home/Tool/Topbar.vue";
import Search from "@/components/Home/Select/Search.vue";
import Pricetabel from "@/components/Home/Select/Pricetabel.vue";
import Swiper from "@/components/Home/Swiper.vue";
import BigSwiper from '@/components/Home/BigSwiper.vue'
import bus from "@/components/eventBus.js";
export default {
  created() {
    let d = new Date()
    const today = d.getDate()
    const month = d.getMonth()
    this.date = month + 1 + "-" + today
    this.$store.state.day = this.date
    let city = JSON.parse(localStorage.getItem('city'))
    this.city = city
    this.init();
  },
  props: {
    pageSize: {
      type: Number,
      default: 5,
    },
    pageNum: {
      type: Number,
      default: 1,
    }
  },
  data() {
    return {
      loading: true, // 加载
      loadingSeat: true, // 座位加载
      loadingNum: {},
      dataList: [],
      flag: false,
      city: {
        beginCity: "",
        endCity: "",
      },
      num: {},
      date: "",
      history: "",
      Childitem: {
        flightId: "",
        beginCity: "",
        endCity: "",
        endTime: "",
        lastPrice: "",
      },
    };
  },
  components: {
    Topbar,
    Search,
    Pricetabel,
    Swiper,
    BigSwiper,
  },
  methods: {
    // 搜索初始化
    async init() {
      
      this.loading = true
      await this.$http
        .post("flight/search", {
          beginCity: this.city.beginCity,
          endCity: this.city.endCity,
          pageSize: this.pageSize,
          pageNum: this.pageNum,
          day: this.date,
        })
        .then(({ data: res }) => {
          this.dataList = res.data.dataList;
          this.loading = false
        });
    },
    // 推荐航班搜索
    async recommend() {
      this.loading = true
      await this.$http
        .post("/recommend/search", {
          beginCity: this.city.beginCity,
          endCity: this.city.endCity,
          pageSize: this.pageSize,
          pageNum: this.pageNum,
          day: this.date,
        })
        .then(({ data: res }) => {
          this.dataList = res.data.dataList;
          this.loading = false
        });
    },
    price(e) {
      e.target.style.color = "#257fd9";
      this.$refs.time.style.color = "#999999";
      console.log("price-select");
      //冒泡排序的优化
      var arr = this.dataList;
      var low = 0;
      var high = arr.length - 1;
      let temp = {};
      while (low < high) {
        for (let j = low; j < high; j++) {
          if (arr[j].lastPrice > arr[j + 1].lastPrice) {
            // 前面的数大于后面的数交换
            temp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = temp;
          }
        }
        --high;
        for (var j = high; j > low; j--) {
          if (arr[j].lastPrice < arr[j - 1].lastPrice) {
            // 后的数小于前面的数交换
            temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
          }
        }
        ++low; //修改low值，往后移动一位
      }
      this.dataList = arr;
      this.$forceUpdate();
    },
    time(e) {
      e.target.style.color = "#257fd9";
      this.$refs.price.style.color = "#999999";
      console.log("time-select");
    },
    chang(e, flag) {
      if (flag) {
        e.target.parentNode.style.backgroundColor = "#ffffff";
      } else {
        e.target.parentNode.style.backgroundColor = "#e1f0fd";
      }
    },
    getCity(val) {
      this.city.beginCity = val.beginCity;
      this.city.endCity = val.endCity;
    },
    async ticketnum(e, id) {
      this.$set(this.loadingNum, id, true);
      await this.$http({
        url: "/flight/seat",
        method: "post",
        data: {
          flightId: id,
        },
      }).then(({ data: res }) => {
        if (res.data === null) {
          alert(res.msg);
        } else {
          this.$set(this.num, id, res.data)
          this.$set(this.loadingNum, id, false);
        }
      });
    },
    pay(e, price, grade, id, seat, beginTime, endTime, beginCity, endCity) {
      // this.$store.state.name = "";
      this.$store.state.price = price
      this.$store.state.grade = grade
      this.$store.state.flightId = id
      this.$store.state.seat = seat
      this.$store.state.beginTime = beginTime
      this.$store.state.endTime = endTime
      this.$store.state.beginCity = beginCity
      this.$store.state.endCity = endCity
      this.$router.push("/home/order");
    },
  },
  mounted() {
    bus.$on("getFlight", (res) => {
      this.dataList = res.dataList;
    });
    bus.$on("getCity", (res) => {
      this.city = res
      this.recommend();
    });
  },
};
</script>

<style lang="less" scoped>
.select-container {
  background-color: #ecf2f7;
  margin-bottom: 40px;
  .flaght-box {
    margin-top: 15px;
    width: 872px;
    .flaght-info-title {
      padding-left: 20px;
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      color: #fff;
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
        color: #999;
        font-size: 12px;
        span {
          font-size: 18px;
        }
      }
    }
    .select-box {
      width: 872px;
      height: 320px;
      .el-empty {
        width: 872px;
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
          position: relative;
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
        .start::before {
          position: absolute;
          font-family: "iconfont" !important;
          top: 10px;
          left: -20px;
          font-size: 20px;
          font-style: normal;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          content: "";
          color: #b0cade;
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
          .line {
            background: url("~@/assets/image/ticket/arrive.png") no-repeat;
            background-size: 100% 100%;
            height: 4px;
            margin: 0 16px;
            font-size: 12px;
            color: #7d8995;
            text-align: center;
          }
        }
        .end {
          position: relative;
          width: 88px;
          height: 60px;
          margin-left: 20px;
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
        .end::before {
          position: absolute;
          font-family: "iconfont" !important;
          top: 10px;
          left: -20px;
          font-size: 20px;
          font-style: normal;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          content: "";
          color: #b0cade;
        }
      }
      .price-item {
        height: 58px;
        width: 100px;
        padding: 11px 0;
        .price-conbin {
          padding-top: 5px;
          text-align: center;
          font-size: 12px;
          color: #242424;
        }
        .price-conbin::after {
          font-family: "iconfont" !important;
          content: "";
          color: #42a9fe;
        }
        .price-num {
          padding: 12px 0 5px;
          font-size: 18px;
          font-weight: 700;
          line-height: 1;
          color: #ff8214;
          text-align: center;
          .icon {
            font-size: 12px;
          }
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
      .button:hover {
        background-color: #67bafe;
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

<template>
  <div class="recommend w clearfix">
    <div class="pre-flightHead fl">
      <span class="economic">优惠航线</span>
    </div>
    <div class="pre-flightTicket fl">
      <div class="pre-ticketlist clearfix">
        <router-link to="/home/select" class="pre-ticketOne fl" 
        v-for="item,index in recommendList" 
        :key="index" 
        @click.native="store(item.beginCity,item.endCity)">
          <p class="name">{{ item.beginCity }}<span></span>{{ item.endCity }}</p>
          <p class="price"><span>￥</span>500起</p>
          <p class="data">2022-6-1</p>
        </router-link>
      </div>
      <div class="pre-ticketlist clearfix">
        <router-link to="" class="pre-ticketOne fl">
          <p class="name">厦门<span></span>昆明</p>
          <p class="price"><span>￥</span>1200</p>
          <p class="data">2022-6-1</p>
        </router-link>
        <router-link to="" class="pre-ticketOne fl">
          <p class="name">厦门<span></span>昆明</p>
          <p class="price"><span>￥</span>1200</p>
          <p class="data">2022-6-1</p>
        </router-link>
      </div>
    </div>
    <div class="pre-flightFoot fr"></div>
  </div>
</template>

<script>
import bus from '@/components/eventBus.js'
export default {
  props: {
    recommendList: {
      type: Array,
      default() {
        return [{beginCity:"无", endCity:"无"}];
      }
    }
  },
  methods: {
    store(beginCity,endCity ) {
      var city = {
        beginCity: beginCity,
        endCity: endCity,
      }
      bus.$emit('getCity', city)
      var myJSON = JSON.stringify(city);
      localStorage.setItem('city', myJSON)
    }
  }
}
</script>

<style lang="less" scoped>
.recommend {
  position: relative;
  top: -50px;
  height: 197px;
  background-color: #fff;
  .pre-flightHead {
    width: 156px;
    height: 64px;
    padding: 133px 0 0 13px;
    background: url("../../../assets/image/index/computergirl.webp") no-repeat;
    background-size: cover;
    .economic {
      position: relative;
      padding-left: 7px;
      font-size: 24px;
      color: #fff;
      &::before {
        content: "";
        position: absolute;
        top: 6px;
        left: 0;
        width: 2px;
        height: 24px;
        background: #71daff;
      }
    }
  }
  .pre-flightTicket {
    width: 700px;
    height: 197px;
    .pre-ticketlist {
      height: 50%;
      .pre-ticketOne {
        float: left;
        position: relative;
        width: 138px;
        height: 68px;
        padding: 16px 0 14px;
        text-align: center;
        .name {
          margin-bottom: 5px;
          color: #8e8e8e;
          font-size: 12px;
          line-height: 16px;
          span {
            display: inline-block;
            width: 10px;
            height: 9px;
            margin: 0 2px;
            background: url("../../../assets/image/index/goandback.png") no-repeat;
            background-size: cover;
          }
        }
        .price {
          color: #ff9522;
          font-size: 18px;
          line-height: 26px;
          font-weight: 700;
          margin-bottom: 5px;
        }
        .data {
          color: #8e8e8e;
          font-size: 12px;
          line-height: 18px;
        }
      }
    }
  }
  .pre-flightFoot {
    width: 300px;
    background: url("../../../assets/image/index/airseat.webp") no-repeat;
    height: inherit;
    background-size: cover;
  }
}
</style>
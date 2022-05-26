<template>
  <div id="pricetabel-container" class="w">
    <div class="pricetabel-box fl">
      <ul class="tabel">
        <li class="bule">
          <p class="data">2021-12-13</p>
          <p class="data">星期二</p>
          <p class="price">￥3</p>
        </li>
        <li>
          <p class="data">2021-12-13</p>
          <p class="data">星期二</p>
          <p class="price">￥3</p>
        </li>
        <li>
          <p class="data">2021-12-13</p>
          <p class="data">星期二</p>
          <p class="price">￥3</p>
        </li>
        <li>
          <p class="data">2021-12-13</p>
          <p class="data">星期二</p>
          <p class="price">￥3</p>
        </li>
        <li>
          <p class="data">2021-12-13</p>
          <p class="data">星期二</p>
          <p class="price">￥3</p>
        </li>
        <li>
          <p class="data">2021-12-13</p>
          <p class="data">星期二</p>
          <p class="price">￥3</p>
        </li>
        <li>
          <p class="data">2021-12-13</p>
          <p class="data">星期二</p>
          <p class="price">￥3</p>
        </li>
        <li class="end">
          <i class="el-icon-date" @click="calendarFlag = !calendarFlag"></i>
          <transition name="el-fade-in-linear">
            <el-calendar v-if="calendarFlag" v-model="calendarValue" class="calendar" 
            style=
            "user-select:none;-webkit-user-select:none;
            -moz-user-select:none;
            -o-user-select:none;">
            </el-calendar>
          </transition>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      calendarFlag: false,
      calendarValue: new Date()
    }
  },
}
</script>

<style lang="less" scoped>
#pricetabel-container {
  margin-top: 15px;
  height: 99px;
  padding: 5px 10px;
  .pricetabel-box {
    width: 872px;
    height: 99px;
    background-color: #ffffff;
    .tabel {
      li {
        float: left;
        width: 99px;
        height: 88px;
        padding: 5px;
        border: 1px solid #c8d5df;
        margin-left: -1px;
        p {
          text-align: center;
        }
        .data {
          font-size: 14px;
          color: #a1a1a1;
        }
        .price {
          margin: 14px 0;
          height: 30px;
          line-height: 30px;
          font-size: 20px;
          color: #ff8214;
        }
      }
      .end {
        display: block;
        position: relative;
        float: left;
        width: 91px;
        height: 88px;
        padding: 5px;
        line-height: 88px;
        text-align: center;
        // :deep(.calendar)
        .calendar {
          position: absolute;
          left: -400px;
          user-seletct: none !important;
          -webkit-user-seletct: none;
          -moz-user-seletct: none;
          -ms-user-seletct: none;
        }
        .calendar /deep/  .el-calendar-table {
          th {
            padding: 0;
          }
          td {
            border: none;
          }
          .el-calendar-day{
            width: 65px;
            height: 40px;
            line-height: 20px;
          }
        }
      }
    }
  }
}
</style>
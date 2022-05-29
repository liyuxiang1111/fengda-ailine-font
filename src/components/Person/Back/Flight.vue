<template>
  <div class="flight-container">
    <div v-for="item in ticketList" :key="item.ticketId">
      <div class="minTit">
        <span class="num">订单号：{{ item.ticketId }}</span>
        <span class="time">航班时间：{{ item.beginTime }} - {{ item.endTime }}</span>
        <span class="price">￥{{ item.price }}</span>
      </div>
      <div class="ticketInfo">
        <table>
          <tr>
            <th style="width: 13%">联系人</th>
            <th style="width: 13%">航班</th>
            <th style="width: 22%">出发</th>
            <th style="width: 22%">到达</th>
            <th style="width: 17%">状态</th>
            <th style="width: 13%">退票理由</th>
          </tr>
          <tr>
            <td>{{ item.buyerName }}</td>
            <td>{{ item.flightName }}</td>
            <td>
              <p>{{ item.beginCity }}</p>
            </td>
            <td>
              <p>{{ item.endCity }}</p>
            </td>
            <td style="line-height: 25px"><span> 已取消 </span></td>
            <td class="modify">
              <p>
                {{ item.resource }}
              </p>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <Page class="page"></Page>
  </div>
</template>

<script>
import Page from '@/components/Person/Page.vue'
export default {
  components: {
    Page
  },
  props: {
    ticketList: {
      type: Array
    },
  },
}
</script>

<style lang="less" scoped>
.flight-container {
  height: 140px;
  .minTit {
    position: relative;
    padding: 0 20px 0 12px;
    line-height: 50px;
    .num {
      font-size: 12px;
      color: #4a4a4a;
    }
    .time {
      margin-left: 10px;
      font-size: 12px;
      color: #4a4a4a;
    }
    .price {
      float: right;
      font-size: 15px;
      color: #ff8214;
    }
  }
  .minTit::before {
    content: '';
    position: absolute;
    width: 2px;
    height: 20px;
    background: #ff8214;
    left: 0;
    top: 18px;
  }
  .ticketInfo {
    height: 90px;
    table {
      width: 100%;
      border-collapse: collapse;
      tr {
        line-height: 50px;
        th {
          font-size: 12px;
          color: #093a57;
          font-weight: 400;
          line-height: 40px;
          text-align: center;
          border-right: 1px solid #e1e4e7;
          background: #eff6fd;
        }
        td {
          font-size: 13px;
          font-weight: 400;
          color: #000;
          text-align: center;
          border-right: 1px solid #e1e4e7;
        }
      }
    }
  }
  .page {
    padding-top: 50px;
    text-align: center;
  }
}
</style>

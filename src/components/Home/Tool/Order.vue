<template>
  <div class="order-contaienr">
    <Topbar></Topbar>
    <div class="order-box w">
      <Top></Top>
    </div>
  </div>
</template>

<script>
import Topbar from '@/components/Home/Tool/Topbar.vue'
import Top from '@/components/Home/Order/Top.vue'
export default {
  components: {
    Topbar,
    Top,
  },
}
</script>

<style lang="less" scoped>
.order-contaienr {
  .order-box {
    .passenger-box {
      width: 880px;
      .passenger-top {
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        color: #fff;
        background-color: #2f71bd;
        padding-left: 20px;
      }
      .passenger-body-box {
        background-color: #ffffff;
        padding: 15px 20px 15px 20px;
        .passenger-body {
          height: 102px;
          font-size: 12px;
          color: #a8630f;
          background-color: #fff5e9;
          padding: 20px;
          p {
            line-height: 21px;
          }
        }
      }
      .passenger-body-box::before {
        position: absolute;
        display: block;
        float: left;
        content: '';
        width: 10px;
        height: 142px;
        background-color: #ffd39c;
      }
      .member-top {
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        color: #1c53a1;
        background-color: #cae7ff;
        padding-left: 30px;
      }
      .member-body {
        height: 360px;
        padding: 20px;
        background-color: #fff;
        .list-group {
          margin-top: 20px;
          height: 40px;
          line-height: 40px;
          .input-name {
            width: 400px;
          }
          .id-type {
            width: 150px;
          }
          .input-id {
            width: 250px;
          }
          .input-email {
            width: 400px;
          }
          .tel-type {
            width: 150px;
          }
          .input-tel {
            width: 250px;
          }
          .gh {
            display: inline-block;
            width: 150px;
            height: 21.54px;
            line-height: 21.54px;
            text-align: right;
            margin-right: 20px;
          }
          .button {
            width: 150px;
            height: 38px;
          }
          .back {
            border-radius: 50px;
            background-color: #05c8ff;
            text-align: center;
            line-height: 38px;
          }
          .next {
            border-radius: 50px;
            background-color: #ff9e00;
            text-align: center;
            line-height: 38px;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="pricetabel-contaienr w">
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
        <li class="end">end</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scopde>
.pricetabel-contaienr {
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
        float: left;
        width: 91px;
        height: 88px;
        padding: 5px;
        line-height: 88px;
        text-align: center;
      }
    }
  }
}
</style>

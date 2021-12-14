<template>
  <div class="pricetabel-contaienr w">
    <div class="pricetabel-box fl">
      <ul class="tabel">
        <li>
          <p class="data">2021-12-13</p>
          <p class="data">星期二</p>
          <p class="price">￥3</p>
        </li>
        <li>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </li>
        <li>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </li>
        <li>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </li>
        <li>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </li>
        <li>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </li>
        <li>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </li>
        <li>end</li>
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
  background-color: pink;
  .pricetabel-box {
    width: 872px;
    height: 99px;
    background-color: skyblue;
    .tabel {
      li {
        float: left;
        width: 99px;
        height: 88px;
        padding: 5px;
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
    }
  }
}
</style>

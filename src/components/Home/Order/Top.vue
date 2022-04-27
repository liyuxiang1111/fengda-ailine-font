<template>
  <div class="order-top">
    <div class="flight">
      <div class="flight-simple"></div>
      <div class="logo-num">
        <div class="logo"></div>
        <span class="flight-num">航班编号：{{ flightId }}</span>
      </div>
      <div class="flight-item">
        <div class="start">
          <div class="airport">{{ beginCity }}</div>
          <div class="time">{{ day }} {{ beginTime }}</div>
        </div>
        <div class="od-line">
          <div class="direct"></div>
        </div>
        <div class="end">
          <div class="airport">{{ endCity }}</div>
          <div class="time">{{ day }} {{ endTime }}</div>
        </div>
      </div>
      <div class="equipment">
        <span class="type">波音747</span>
      </div>
      <div class="duration">1小时55分</div>
    </div>
    <div class="extra w">
      <div class="cabin extra-item" v-if="grade == 0">普通舱(N)</div>
      <div class="cabin extra-item" v-if="grade == 1">商务舱(I)</div>
      <div class="cabin extra-item" v-if="grade == 2">商务舱(I)</div>
      <div class="rule extra-item">
        <div class="wrapper">行李|机票规定</div>
        <span class="alert"></span>
      </div>
      <div class="rule extra-item">
        <div class="wrapper">票价详情</div>
        <span class="alert"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.day = localStorage.getItem('day')
    this.flightId = localStorage.getItem('flightId')
    this.grade = localStorage.getItem('grade')
    this.beginTime = localStorage.getItem('beginTime')
    this.endTime = localStorage.getItem('endTime')
    this.beginCity = localStorage.getItem('beginCity')
    this.endCity = localStorage.getItem('endCity')
  },
  data() {
    return {
      day: '',
      flightId: '',
      grade: '',
      beginTime: '',
      endTime: '',
      beginCity: '',
      endCity: '',
    }
  },
}
</script>

<style scoped>
.order-top {
  margin-bottom: 60px;
}
.flight {
  height: 70px;
  background-color: #fff;
}

.flight-simple {
  margin-top: 26px;
  margin-right: 30px;
  width: 58px;
  height: 18px;
  line-height: 18px;
  font-size: 13px;
  text-align: right;
  position: relative;
  float: left;
  border-left: 2px solid #ffa100;
}

/* 图标航班号 */
.logo-num {
  position: relative;
  float: left;
  width: 20%;
  font-size: 16px;
  color: #14466c;
  line-height: 38px;
  padding-left: 36px;
}

.logo {
  float: left;
  width: 36px;
  height: 70px;
  margin-top: 22px;
  background-repeat: no-repeat;
  background-size: 100%;
}

.flight-num {
  float: left;
  font-size: 16px;
  display: inline-block;
  padding: 16px 0;
}

/* 地点时间 */
.flight-item {
  float: left;
  width: 40%;
  font-size: 13px;
  line-height: 22px;
  padding: 13px 0;
  overflow: visible;
  text-align: center;
}

.start {
  display: inline-block;
  text-align: right;
}

.od-line {
  position: relative;
  display: inline-block;
  text-align: center;
  vertical-align: bottom;
  width: 88px;
  height: 44px;
  margin: 0 20px;
}

.direct {
  width: 100%;
  height: 100%;
  background: url('~@/assets/image/ticket/arrive.png') no-repeat 50%;
  background-size: contain;
  cursor: pointer;
}

.end {
  display: inline-block;
  text-align: left;
}

/* 型号时长 */
.equipment {
  float: right;
  margin-right: 20px;
  padding: 16px 0;
  line-height: 38px;
  font-size: 12px;
  text-align: right;
}

.type {
  padding: 2px 8px;
  color: #1c53a1;
  background: #aae5ff;
  border-radius: 10px;
}

.duration {
  float: right;
  margin-right: 40px;
  padding: 16px 0;
  line-height: 38px;
  font-size: 12px;
  color: #39424c;
  text-align: right;
}

/* 下部分 */
.extra {
  position: absolute;
  height: 42px;
  background-color: #fff;
}

.extra-item {
  display: inline-block;
  font-size: 12px;
  color: #242424;
  padding: 12px 25px;
}

.cabin {
  position: relative;
  top: 0;
  left: 0;
}

.rule {
  float: right;
}

.wrapper {
  display: inline-block;
}

.alert {
  position: relative;
  display: inline-block;
  width: 12px;
  height: 12px;
  top: 2px;
  left: 0;
  cursor: pointer;
  margin-left: 5px;
  background: url('~@/assets/image/ticket/wenhao.png') no-repeat;
  background-size: 100% 100%;
}
</style>

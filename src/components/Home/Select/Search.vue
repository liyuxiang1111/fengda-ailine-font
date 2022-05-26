<template>
  <div class="search-container w boxshadow">
    <div class="top-btu">
      <div class="btn">单程</div>
      <div class="btn">往返</div>
    </div>
    <div class="text-btu">
      <div class="section-input text-first">
        <el-select v-model="city.beginCity" filterable placeholder="出发城市" @click.native="getOption1">
          <template #prefix>
            <span class="iconfont icon-chengshi"></span>
          </template>
          <el-option v-for="(item, index) in options1" :key="index" :label="item" v-model="city.beginCity" @click.native="getBeginCity(item)"> </el-option>
        </el-select>
        <!-- <input type="text" class="account" placeholder="出发城市" tabindex="4" v-model="city.beginCity" /> -->
      </div>
      <div class="section-input">
        <el-select v-model="city.endCity" filterable placeholder="到达城市" @click.native="getOption2">
          <template #prefix>
            <span class="iconfont icon-chengshi"></span>
          </template>
          <el-option v-for="(item, index) in options2" :key="index" :label="item" v-model="city.beginCity" @click.native="getEndCity(item)"> </el-option>
        </el-select>
        <!-- <input type="text" class="account" placeholder="到达城市" tabindex="4" v-model="city.endCity" /> -->
      </div>
      <div class="data-box">
        <el-date-picker class="data" v-model="data" type="datetime" placeholder="选择日期时间" default-time="12:00:00"> </el-date-picker>
      </div>
      <div class="section-btn fr button" @click="search">查询</div>
    </div>
  </div>
</template>

<script>
import bus from '@/components/eventBus.js'

export default {
  props: {
    pageSize: {
      default: 5,
      type: Number,
    },
    pageNum: {
      default: 1,
      type: Number,
    },
  },
  data() {
    return {
      city: {
        beginCity: '福州',
        endCity: '上海',
      },
      data: '30',
      res: {},
      day: 30,
      options1: [],
      options2: [],
    }
  },
  methods: {
    async search() {
      await this.$http
        .post('flight/search', {
          beginCity: this.city.beginCity,
          endCity: this.city.endCity,
          pageSize: this.pageSize,
          pageNum: this.pageNum,
          day: this.day,
        })
        .then(({ data: res }) => {
          bus.$emit('getFlight', res.data)
          this.$emit('shareCity', this.city)
        })
    },
    async getOption1() {
      await this.$http.get('/flight/city/begin').then(({ data: res }) => {
        this.options1 = res.data
      })
    },
    async getOption2() {
      await this.$http.get('flight/city/end').then(({ data: res }) => {
        this.options2 = res.data
      })
    },
    getBeginCity(city) {
      this.city.beginCity = city
    },
    getEndCity(city) {
      this.city.endCity = city
    },
  },
  created() {
    this.getOption1()
    this.getOption2()
  },
}
</script>

<style lang="less" scoped>
.search-container {
  height: 150px;
  border-radius: 5px;
  background-color: #ffffff;
  .top-btu {
    height: 50px;
    margin: 0 auto;
    border-bottom: 1px solid #e1e1e1;
    .btn {
      display: inline-block;
      width: 92px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      margin-top: 9px;
      margin-left: 10px;
      margin-right: 20px;
      border-radius: 20px;
      background-color: orange;
      cursor: pointer;
    }
  }
  .text-btu {
    height: 99px;
    margin: 0 auto;
    background-color: #fff;
    padding: 0 10px;
    .section-input {
      position: relative;
      float: left;
      width: 160px;
      height: 40px;
      margin-top: 30px;
      margin-left: 40px;
      span {
        position: absolute;
        top: 0.8rem;
        left: 0.2rem;
      }
    }
    .data-box {
      float: left;
      width: 160px;
      height: 40px;
      margin-top: 30px;
      margin-left: 30px;
      .data {
        width: 160px;
      }
    }
    .text-first {
      margin-left: 0;
    }
    .section-btn {
      display: inline-block;
      width: 160px;
      height: 40px;
      line-height: 40px;
      font-size: 17px;
      margin-top: 30px;
      text-align: center;
      color: #fff;
      background-color: orange;
      border-radius: 20px;
    }
  }
}
</style>

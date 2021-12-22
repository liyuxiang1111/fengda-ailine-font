<template>
  <div class="order-contaienr">
    <Topbar></Topbar>
    <div class="order-box w clearfix">
      <Top></Top>
      <div class="passenger-box fl">
        <div class="passenger-top">乘机人信息</div>
        <div class="passenger-body-box">
          <div class="passenger-body">
            <h5>温馨提示</h5>
            <p>1、姓名应输入全名，不得使用简写；姓名内不得出现"."或"－"等符号；姓名后不得输入MS/MR/CHD等其它内容；若您护照号以PR开头，则PR二字无需输入；请注意不要混淆英文字母'O'和数字'0'。</p>
            <p>2、请您务必填写与乘机时出示的有效身份证件一致的姓名与号码。</p>
            <p>3、涉及国家空防安全考虑，请您确保有效身份证件号码正确无误，该号码一经确定不允许修改；购票后发现该号码有误，客票将按自愿退票处理。</p>
          </div>
        </div>
        <div class="member-top">乘机人</div>
        <div class="member-body">
          <div class="list-group">
            <span class="gh"> 姓名</span>
            <el-input class="input-name" v-model="input" placeholder="请输入乘客姓名"></el-input>
          </div>
          <div class="list-group">
            <span class="gh">证件信息</span>
            <el-select class="id-type" v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select>
            <el-input class="input-id" v-model="input" placeholder="证件号码"></el-input>
          </div>
          <div class="list-group">
            <span class="gh">手机号码</span>
            <el-select class="tel-type" v-model="value" placeholder="请选择">
              <el-option v-for="item in tel" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select>
            <el-input class="input-tel" v-model="input" placeholder="手机号码"></el-input>
          </div>
          <div class="list-group">
            <span class="gh">Email</span>
            <el-input class="input-email" v-model="input" placeholder="请填写邮箱"></el-input>
          </div>
          <div class="list-group"></div>
          <div class="list-group">
            <div class="back fl button" @click="back">重新选择</div>
            <div class="next fr button" @click="next">下一步</div>
          </div>
        </div>
      </div>
      <div class="swiper-box fr">
        <Swiper></Swiper>
        <div class="top-tip"><p>所有航班起抵时间均为当地时间（24小时制），请注意安排行程。</p></div>
        <div class="tip">
          <div class="title">温馨提示：</div>
          <p>厦航官网暂不接受重要旅客（VIP)、孕妇、病残旅客等特殊旅客购票。如您有需要，请到厦航自营售票处咨询。</p>
        </div>
        <div class="advertisement">广告位招租</div>
      </div>
    </div>
  </div>
</template>

<script>
import Topbar from '@/components/Home/Tool/Topbar.vue'
import Top from '@/components/Home/Order/Top.vue'
import Swiper from '@/components/Home/Swiper.vue'
export default {
  data() {
    return {
      input: '',
      options: [
        {
          value: '选项1',
          label: '身份证',
        },
        {
          value: '选项2',
          label: '港澳台居住证',
        },
        {
          value: '选项3',
          label: '台湾居民居住证',
        },
        {
          value: '选项4',
          label: '护照',
        },
        {
          value: '选项5',
          label: '港澳居民来往内地通行证',
        },
        {
          value: '选项6',
          label: '台湾居民来往大陆通行证',
        },
      ],
      tel: [
        {
          value: '选项1',
          label: '身份证',
        },
        {
          value: '选项2',
          label: '港澳台居住证',
        },
        {
          value: '选项3',
          label: '台湾居民居住证',
        },
        {
          value: '选项4',
          label: '护照',
        },
        {
          value: '选项5',
          label: '港澳居民来往内地通行证',
        },
        {
          value: '选项6',
          label: '台湾居民来往大陆通行证',
        },
      ],
      value: '',
    }
  },
  components: {
    Topbar,
    Top,
    Swiper,
  },
  methods: {
    back() {
      this.$router.push('/home')
    },
    next() {
      this.$router.push('/home/pay')
    },
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
    .swiper-box {
      /deep/ img {
        width: 270px;
      }
      width: 270px;
      .top-tip {
        height: 60px;
        padding: 20px;
        margin-top: 10px;
        background-color: #ffecca;
        border-top: 5px solid #fd8923;
        border-bottom: 5px solid #fd8923;
        p {
          font-size: 12px;
          color: #8f5727;
          line-height: 1.8;
        }
      }
      .tip {
        height: 110px;
        background-color: #ffecca;
        padding: 20px;
        .title {
          margin-bottom: 14px;
          color: #8f5727;
          font-size: 16px;
        }
        p {
          font-size: 12px;
          color: #8f5727;
          line-height: 1.8;
        }
      }
      .advertisement {
        margin-top: 10px;
        height: 200px;
        line-height: 200px;
        text-align: center;
        background-color: #fd8923;
      }
    }
  }
}
</style>

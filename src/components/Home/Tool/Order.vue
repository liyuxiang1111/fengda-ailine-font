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
        <el-form class="member-body" :model="menuberForm" :rules="menuberRules" label-width="100px" :show-message="true" ref="form">
          <div class="list-group">
            <el-form-item label="乘客姓名：" prop="username">
              <el-input class="input-name" v-model="menuberForm.username" placeholder="请输入乘客姓名"></el-input>
            </el-form-item>
          </div>
          <div class="list-group">
            <el-form-item label="证件信息：" prop="certificate">
              <el-select class="id-type" v-model="menuberForm.value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
              </el-select>
              <el-input class="input-id" v-model="menuberForm.certificate" placeholder="证件号码"></el-input>
            </el-form-item>
          </div>
          <div class="list-group">
            <el-form-item label="手机号码：" prop="tel">
              <el-input class="input-tel" v-model="menuberForm.tel" placeholder="手机号码" type="text" autocomplete="off" ></el-input>
            </el-form-item>
          </div>
          <div class="list-group">
            <el-form-item label="E-mail：" prop="email">
              <el-input class="input-email" v-model="menuberForm.email" placeholder="请填写邮箱" type="text" autocomplete="off" ></el-input>
            </el-form-item>
          </div>
          <div class="list-group"></div>
          <div class="list-group">
            <div class="back fl button" @click="back">重新选择</div>
            <!-- <div class="next fr button" @click="next">下一步</div> -->
            <button class="next fr button" @click="next" :disabled="nextFlag">下一步</button>
          </div>
        </el-form>
      </div>
      <div class="swiper-box fr">
        <Swiper></Swiper>
        <div class="top-tip"><p>所有航班起抵时间均为当地时间（24小时制），请注意安排行程。</p></div>
        <div class="tip">
          <div class="title">温馨提示：</div>
          <p>凤航官网暂不接受重要旅客(VIP)、孕妇、病残旅客等特殊旅客购票。如您有需要，请到凤航自营售票处咨询。</p>
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
      // 按钮的flag
      nextFlag: true,
      options: [
        {
          value: '1',
          label: '身份证',
        },
        {
          value: '2',
          label: '港澳台居住证',
        },
        {
          value: '3',
          label: '台湾居民居住证',
        },
        {
          value: '4',
          label: '护照',
        },
        {
          value: '5',
          label: '港澳居民来往内地通行证',
        },
        {
          value: '6',
          label: '台湾居民来往大陆通行证',
        },
      ],
      menuberForm: {
        value: '',
        username: '',
        certificate: '',
        email: '',
        tel: '',
      },
      // 正则规则
      menuberRules: {
        username: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { pattern: /^[\u4e00-\u9fa5]{0,}$/, message: '请输入中文姓名' },
        ],
        certificate: [
          { required: true, message: '请输入身份证', trigger: 'blur' },
          { pattern: /^\d{15}|\d{18}$/, message: '请输入合法身份证号' },
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, message: '请输入合法邮箱' },
        ],
        tel: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { pattern: /^1((3[\d])|(4[5,6,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[1-3,5-8])|(9[1,8,9]))\d{8}$/, message: '请输入正确的手机号码' },
        ],
      },
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
        this.$store.state.menberName = this.menuberForm.username
        this.$store.state.certificate = this.menuberForm.certificate
        this.$store.state.certificateType = this.menuberForm.value
        this.$store.state.telephone = this.menuberForm.tel  
        this.$store.state.email = this.menuberForm.email
        // localStorage.setItem('passengerName', this.menuberForm.username)
        // localStorage.setItem('certificate', this.menuberForm.certificate)
        // localStorage.setItem('certificateType', this.menuberForm.value)
        // localStorage.setItem('telephone', this.menuberForm.tel)
        // localStorage.setItem('email', this.menuberForm.email)
        this.$router.push('/home/pay')
    },
  },
  watch: {
    menuberForm: {
      handler() {
        console.log('监听')
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.nextFlag = false
          } else {
            this.nextFlag = true
          }
        })
      },
      deep: true,
    },
  },
}
</script>

<style lang="less" scoped>
.order-contaienr {
  margin-bottom: 50px;
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
        padding: 20px 60px 20px 60px;
        background-color: #fff;
        .list-group {
          margin-top: 20px;
          height: 40px;
          line-height: 40px;
          .input-name {
            border-radius: 20px;
            width: 400px;
          }
          .id-type {
            width: 150px;
            margin-right: 20px;
          }
          .input-id {
            width: 230px;
          }
          .input-email {
            width: 400px;
          }
          .input-tel {
            width: 400px;
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

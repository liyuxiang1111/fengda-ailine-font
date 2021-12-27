<template>
  <div class="step1-container w white boxshadow">
    <div class="title">
      <h2 class="fl">凤达航空会员注册</h2>
      <ul class="fr">
        <li class="fl"><span>1</span>基本信息</li>
        <li class="fl step-box"><span class="step">2</span>联系信息</li>
        <li class="fl"><span>3</span>注册完成</li>
      </ul>
    </div>
    <div class="information">
      <form action="">
        <div class="form-group"><label for="">真实姓名：</label><el-input class="input-box" v-model="realname" placeholder="请您的真实姓名"></el-input></div>
        <div class="form-group"><label for="">邮箱：</label><el-input class="input-box" v-model="mail" placeholder="请输入邮箱"></el-input></div>
        <div class="form-group"><label for="">电话：</label><el-input class="input-box" v-model="telephone" placeholder="请输入联系电话"></el-input></div>
        <div class="form-group">
          <div class="notice fr"><input type="checkbox" class="fl" />我同意接收凤达航空的最新资讯（会员权限可以随时退订）</div>
        </div>
        <div class="form-group">
          <div class="notice fr">
            <div class="button next" @click="next">下一步</div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import bus from '@/components/eventBus.js'
export default {
  created() {
    bus.$on('getRegisterList', (val) => {
      console.log(val)
      this.registerList = val
      console.log('registerList')
      console.log(this.registerList)
    })
  },
  data() {
    return {
      realname: '',
      telephone: '',
      mail: '',
      registerList: {},
      token: '',
    }
  },
  methods: {
    async next() {
      await this.$http({
        url: 'register',
        method: 'post',
        data: {
          nickName: this.registerList.userName,
          userPwd: this.registerList.passwd,
          telephone: this.telephone,
          email: this.mail,
          gender: this.registerList.userSex,
          realName: this.realname,
          certificate: this.registerList.id,
          certificateType: this.registerList.idType,
        },
      }).then(({ data: res }) => {
        if (res.data === null) {
          alert(res.msg)
        } else {
          this.token = res.data
          localStorage.setItem('Authorizatio', res.data)
          this.$router.push('/register/step3')
        }
      })
    },
  },
}
</script>

<style lang="less">
.step1-container {
  height: 539px;
  padding: 10px;
  background-color: #ffffff;
  .title {
    height: 50px;
    padding: 5px 10px;
    border-bottom: 3px solid #004385;
    h2 {
      margin-top: 10px;
    }
    ul {
      margin-top: 10px;
      li {
        width: 130px;
        margin-right: 10px;
        height: 36px;
        line-height: 36px;
        color: #b8b8b8;
        span {
          display: inline-block;
          height: 36px;
          width: 36px;
          margin-right: 10px;
          text-align: center;
          font-size: 14px;
          background-color: #b8b8b8;
          border-radius: 50%;
          color: #ffffff;
        }
      }
      .step-box {
        margin-top: 0;
        color: #004385;
        .step {
          background-color: #004385;
          border-radius: 50%;
          color: #ffffff;
        }
      }
    }
  }
  .information {
    margin-top: 50px;
    padding: 0 15px;
    width: 716px;
    height: 429px;
    form {
      .form-group {
        height: 34px;
        margin-bottom: 15px;
        label {
          float: left;
          display: block;
          width: 186px;
          padding: 7px 15px 0;
          text-align: right;
        }
        .input-box {
          width: 281px;
          height: 34px;
          border: 1px solid #cccccc;
          border-radius: 5px;
        }
        .gender {
          padding-top: 7px;
          input {
            width: 15px;
            height: 15px;
            margin-right: 4px;
          }
        }
        .notice {
          width: 485px;
          height: 27px;
          padding: 0 15px;
          input {
            width: 15px;
            height: 15px;
          }
          .next {
            width: 120px;
            height: 40px;
            background-color: #ff8400;
            border-radius: 5px;
          }
        }
      }
    }
  }
}
</style>

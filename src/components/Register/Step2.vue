<template>
  <div class="step2-container w white boxshadow">
    <Title></Title>
    <div class="information">
      <el-form :model="realmessage" :rules="realmessageRules" :show-message="true" ref="realmessage">
        <div class="form-group">
          <el-form-item label="真实姓名：" prop="realname">
            <el-input id="realname" class="input-box" v-model="realmessage.realname" placeholder="请输入您的真实姓名"></el-input>
          </el-form-item>
        </div>
        <div class="form-group">
          <el-form-item label="邮箱：" prop="mail">
            <el-input id="mail" class="input-box" v-model="realmessage.mail" placeholder="请输入邮箱"></el-input>
          </el-form-item>
        </div>
        <div class="form-group">
          <el-form-item label="电话：" prop="telephone">
            <el-input id="telephone" class="input-box" v-model="realmessage.telephone" placeholder="请输入电话号码"></el-input>
          </el-form-item>
        </div>
        <div class="form-group">
          <el-form-item prop="userManual">
            <div class="notice fr"><input type="checkbox"/><span>我同意接收凤达航空的最新资讯（会员权限可以随时退订）</span></div>
          </el-form-item>
        </div>
        <div class="form-group">
          <div class="notice fr">
            <button class="button next" @click.prevent="next" :disabled="nextFlag">下一步</button>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import bus from '@/components/eventBus.js'
import Title from '@/components/Register/Title.vue'
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
      realmessage:{realname: '',telephone: '', mail: '',userManual:''},
      registerList: {},
      token: '',
      nextFlag: true,
      realmessageRules: {
        realname: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { pattern: /^[\u4e00-\u9fa5]{0,}$/, message: '请输入中文姓名' },
        ],
        mail: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, message: '请输入合法邮箱' },
        ],
        telephone: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { pattern: /^1((3[\d])|(4[5,6,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[1-3,5-8])|(9[1,8,9]))\d{8}$/, message: '请输入正确的手机号码' },
        ],
        userManual:[
          { required: false, message: '请阅读用户条款', trigger: 'blur'},
        ],
  },
    }
  },
  watch: {
    realmessage: {
      handler() {
        console.log('监听')
        this.$refs['realmessage'].validate((valid) => {
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
  methods: {
    async next() {
      await this.$http({
        url: 'register',
        method: 'post',
        data: {
          nickName: this.registerList.userName,
          userPwd: this.registerList.passwd,
          telephone: this.realmessage.telephone,
          email: this.realmessage.mail,
          gender: this.registerList.userSex,
          realName: this.realmessage.realname,
          certificate: this.registerList.id,
          certificateType: this.registerList.idType,
        },
      }).then(({ data: res }) => {
        if (res.data === null) {
          this.$message({
          message: res.msg,
          type: 'error',
          })
        } else {
          this.token = res.data
          localStorage.setItem('Authorization', res.data)
          this.$router.push('/register/step3')
        }
      })
    },
  },
  components:{
    Title,
  },
}
</script>

<style lang="less" scoped>
.step2-container {
  height: 539px;
  padding: 10px;
  background-color: #ffffff;
  .information {
    margin-top: 50px;
    padding: 0 15px;
    width: 716px;
    height: 429px;
    form {
      .form-group {
        float: right;
        height: 40px;
        width: 400px;
        margin-bottom: 15px;
        margin-top: 15px;
        text-align: right;
        /deep/.el-form-item__label{
          display: inline-block;
          float: none;
          padding: 0 15px 0 0;
        }
        /deep/.el-form-item__content{
          display: inline-block;
          /deep/.el-form-item__error{
            left: 200px;
          }
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
          width: 395px;
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
            text-align: center;
            line-height: 40px;
            margin-right: 100px;
          }
        }
      }
    }
  }
}
</style>

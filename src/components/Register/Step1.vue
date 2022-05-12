<template>
  <div class="step1-container w white boxshadow">
    <Title></Title>
    <div class="information">
      <el-form :model="registerList" :rules="registerListRules" :show-message="true" ref="registerList">
        <div class="form-group">
          <el-form-item label="用户名：" prop="userName">
            <el-input id="userName" class="input-box" v-model="registerList.userName" placeholder="请输入用户名"></el-input>
          </el-form-item>
        </div>
        <div class="form-group">
          <el-form-item label="密码：" prop="passwd">
            <el-input id="passwd" class="input-box" v-model="registerList.passwd" placeholder="请输入密码"></el-input>
          </el-form-item>
        </div>
        <div class="form-group">
          <el-form-item label="身份证：" prop="id">
            <el-input id="id" class="input-box" v-model="registerList.id" placeholder="请输入身份证"></el-input>
          </el-form-item>  
        </div>
        <div class="form-group">
          <el-form-item label="身份证类型：" prop="idtype" class="idtype">
          <el-select v-model="registerList.idType" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-select>
          </el-form-item>  
        </div>
        <div class="form-group">
          <el-form-item label="称谓：" prop="userSex" class="usersex">
            <div class="gender">
            <input type="radio" name="gender" value="1" v-model="registerList.userSex" /><span>先生</span> <input type="radio" name="gender" value="0" v-model="registerList.userSex" /><span>女士</span>
            </div>
          </el-form-item>  
        </div>
        <div class="form-group">
          <el-form-item prop="userManual">
            <div class="notice fr"><input type="checkbox" /><span>我同意遵循</span><router-link to="">《用户条款》</router-link></div>
          </el-form-item>
        </div>
        <div class="form-group">
          <div class="notice fr">
            <button class="button next" @click="next" :disabled="nextFlag">下一步</button>
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
  data() {
    return {
      registerList: { id: '', userName: '', passwd: '', idType: '', userSex: '',userManual:'' },
      options: [
        {
          value: '1',
          label: '身份证',
        },
        {
          value: '2',
          label: '港澳居民居住证',
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
          label: '其他',
        },
      ],
      value: '',
      nextFlag: true,
      registerListRules: {
        id: [
          { required: true, message: '请输入身份证', trigger: 'blur' },
          { pattern: /^\d{15}|\d{18}$/, message: '请输入合法身份证号' },
        ],
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        passwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
        idType:[
          { required: true, message: '请选择', trigger: 'blur'},
        ],
        userSex:[
          { required: false, message: '请选择', trigger: 'blur'},
        ],
        userManual:[
          { required: false, message: '请阅读用户条款', trigger: 'blur'},
        ],
      },
    }
  },
  methods: {
    next() {
      this.$router.push('/register/step2')
    },
  },
  beforeDestroy() {
    bus.$emit('getRegisterList', this.registerList)
  },
  components:{
    Title,
  },
  watch:{
    registerList: {
      handler() {
        console.log('监听')
        this.$refs['registerList'].validate((valid) => {
          if (valid) {
            this.nextFlag = false
          } else {
            this.nextFlag = true
          }
        })
      },
      deep: true,
    },
  }
}
</script>

<style lang="less" scoped>
.step1-container {
  height: 539px;
  padding: 10px;
  background-color: #ffffff;
  .information {
    margin-top: 30px;
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
        .idtype{
          padding-right: 75px;
        }
        .usersex{
          padding-right: 180px;
        }
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
        }
        .gender {
          input {
            width: 15px;
            height: 15px;
            margin-right: 4px;
            padding-top: 2px;
          }
        }
        .notice {
          width: 267px;
          height: 27px;
          padding: 0 15px;
          line-height: 25px;
          padding-right: 45px;
          text-align: center;
          input {
            margin-top: 5px;
            width: 15px;
            height: 15px;
          }
          span{
            padding: 0;
          }
          .next {
            width: 120px;
            height: 40px;
            background-color: #ff8400;
            border-radius: 5px;
            text-align: center;
            line-height: 40px;
            margin-right: 47px;
          }
        }
      }
      .form-group:nth-last-child(2){
        margin-top: 0;
        padding: 0px 15px 0 ;
        margin-bottom: 0;
      }
      .form-group:last-child{
        margin-top: 0;
        padding: 0px 15px 0 ;
      }
    }
  }
}
</style>

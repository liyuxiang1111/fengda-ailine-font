<template>
  <div class="step1-container w white">
    <div class="title">
      <h2 class="fl">凤达航空会员注册</h2>
      <ul class="fr">
        <li class="fl"><span>1</span> 步骤1</li>
        <li class="fl"><span>2</span>步骤2</li>
        <li class="fl"><span>3</span>步骤3</li>
      </ul>
    </div>
    <div class="information">
      <form action="">
        <div class="form-group"><label for="">用户名：</label><el-input class="input-box" v-model="userName" placeholder="请用户名"></el-input></div>
        <div class="form-group"><label for="">密码：</label><el-input class="input-box" v-model="passwd" placeholder="请输入密码"></el-input></div>
        <div class="form-group"><label for="">身份证：</label><el-input class="input-box" v-model="id" placeholder="请输入身份证"></el-input></div>
        <div class="form-group">
          <label for="">身份证类型：</label>
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-select>
        </div>
        <div class="form-group">
          <label for="">称谓：</label>
          <div class="gender"><input type="radio" /><span>先生</span> <input type="radio" /><span>女士</span></div>
        </div>
        <div class="form-group">
          <div class="notice fr"><input type="checkbox" class="fl" />我同意遵循<router-link to="">《用户条款》</router-link></div>
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
export default {
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '身份证',
        },
        {
          value: '选项2',
          label: '港澳居民居住证',
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
          label: '其他',
        },
      ],
      value: '',
      id: '',
      userName: '',
      passwd: '',
    }
  },
  methods: {
    next() {
      console.log()
      this.$router.push('/register/step2')
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
        margin-right: 10px;
      }
    }
  }
  .information {
    margin-top: 50px;
    padding: 0 15px;
    width: 716px;
    height: 429px;
    background-color: skyblue;
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

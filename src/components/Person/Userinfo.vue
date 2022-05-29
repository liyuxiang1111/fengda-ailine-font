<template>
  <div class="Userinfo-container fr boxshadow" v-loading="loading">
    <div class="title">
      <el-upload class="avatar-uploader fl" action="http://heyongqiang.work:8888/uploadFile" :data="{userId:userinfo.useId}" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <div class="basic fl">
        <span class="name fl" v-if="flag.name">{{ userinfo.nickName }}</span>
        <el-input v-else class="name-input" v-model="userinfo.nickName" @blur="pen('name',flag.name)"></el-input>
        <span class="button iconfont" @click="flag.name = !flag.name">&#xe600; 修改</span>
        <div class="introduce">恭喜你已经成为凤达航空会员</div>
        <div class="gender box" @mouseleave="pen('nameflag',false,'0')">
          <h3 class="fl">姓名：</h3>
          <div class="fl">
            <span v-if="flag.nameflag">{{ userinfo.realName }}</span>
            <el-input v-else class="gender-input" v-model="userinfo.realName" ></el-input>
            <span class="button iconfont pen" @click="flag.nameflag = !flag.nameflag">&#xe600;修改</span>
          </div>
        </div>
        <div class="gender box" @mouseleave="pen('genderflag',false,'1')">
          <h3 class="fl">性别</h3>
          <div class="fl">
            <span v-show="flag.genderflag"><span v-if="sex == 1">男</span><span v-if="sex == 0">女</span></span>
            <div  v-show="!flag.genderflag" class="gender-input" style="height: 20px">
              <el-radio-group v-model="sex">
              <el-radio  v-model="sex" :label="1" class="fl" style="height: 20px" >男</el-radio>
              <el-radio  v-model="sex" :label="0" class="fl" style="height: 20px" >女</el-radio>
              </el-radio-group>
            </div>
            <span class="button iconfont pen" @click="flag.genderflag = !flag.genderflag">&#xe600;修改</span>
          </div>
        </div>
        <div class="box" @mouseleave="pen('emilflag',false,'2')">
          <h3 class="fl">邮箱</h3>
          <div class="fl">
            <span v-if="flag.emilflag">{{ userinfo.email }}</span>
            <el-input v-else class="emil-input" v-model="userinfo.email"></el-input>
            <span class="button iconfont pen" @click="flag.emilflag = !flag.emilflag">&#xe600;修改</span>
          </div>
        </div>
        <div class="box" @mouseleave="pen('tel',false,'3')">
          <h3 class="fl">电话</h3>
          <div class="fl">
            <span v-if="flag.tel">{{ userinfo.telephone }}</span>
            <el-input v-else class="tel-input" v-model="userinfo.telephone"></el-input>
            <span class="button iconfont pen" @click="flag.tel = !flag.tel">&#xe600;修改</span>
          </div>
        </div>
        <el-button class="userinfo-but" type="primary" @click="post($event, userinfo.telephone, userinfo.email, userinfo.nickName, sex, userinfo.realName)">提交保存</el-button>
        <el-button>重置</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.token = localStorage.getItem('Authorization')
    this.getInformation()
  },
  data() {
    return {
      radio: '1',
      loading:true,
      // img 请求参数
      avatarHeader: {},
      token: '',
      imageUrl: '',
      flag: {
        name: true,
        nameflag: true,
        genderflag: true,
        emilflag: true,
        tel: true,
      },
      userinfo: {
        useId:'',
        nickName:'',
        realName:'',
        gender:'',
        email:'',
        telephone:'',
        userImg:'',
      },
      sex: '',
    }
  },
  methods: {
    // 头像上传成功
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    // 用户图片
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    // 获取用户信息
    async getInformation() {
      this.loading = true
      await this.$http({
        url: 'passenger',
        method: 'get',
        headers: {
          Authorization: this.token,
        },
      }).then(({ data: res }) => {
        // userinfo
        this.userinfo.useId = res.data.useId
        this.userinfo.nickName = res.data.nickName
        this.userinfo.realName = res.data.realName
        this.imageUrl = res.data.userImg
        this.sex = res.data.gender
        this.userinfo.email = res.data.email
        this.userinfo.telephone = res.data.telephone
        this.loading = false
        // this.userinfo = res.data
      })
    },
    // 修改密码
    /**
     * @param phone, email, nickname, gender, realname
     * @returns token
     */
    async post(e, phone, email, nickname, gender, realname) {
      console.log(gender);
      await this.$http({
        url: 'passenger/informations',
        method: 'post',
        headers: {
          Authorization: localStorage.getItem('Authorization'),
        },
        data: {
          telephoneNumber: phone,
          email: email,
          nickname: nickname,
          gender: gender,
          realname: realname,
        },
      }).then(({ data: res }) => {
        if (res.msg === 'success') {
          this.token = res.data
          localStorage.setItem('Authorization', this.token)
          this.$message({
            message: "修改信息成功！",
            type: 'success',
          })
          this.getInformation()
        } else {
          this.$message({
            message: res.msg,
            type: 'error',
          })
        }
      })
    },
    /**
     * 文本框失去焦点
     */
    pen(flagName, flag, index) {
      this.flag[flagName] = !flag
    }
  },
}
</script>

<style lang="less" scoped>
.Userinfo-container {
  width: 890px;
  height: 466px;
  padding: 15px;
  background-color: #ffffff;
  .title {
    width: 600px;
    .avatar-uploader {
      height: 178px;
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      line-height: 178px;
      text-align: center;
    }
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
    .basic {
      width: 390px;
      padding: 10px 15px;
      background: url("../../assets/image/person/金色祥云.png") no-repeat;
      background-size: cover;
      .name {
        margin-right: 30px;
        
      }
      .name-input {
        width: 200px;
        height: 36px;
        margin-right: 10px;
      }
      .introduce {
        height: 43px;
        margin-top: 20px;
        line-height: 43px;
      }
      .box {
        height: 36px;
        padding: 15px 0;
        border-bottom: 1px solid #ebebeb;
        h3 {
          display: inline;
          line-height: 36px;
        }
        .gender-input {
          width: 60px;
          margin: 0 !important;
        }
        .emil-input {
          width: 200px;
          margin-right: 10px;
        }
        .tel-input {
          width: 170px;
          margin-right: 10px;
        }
        div {
          margin-left: 20px;
          width: 295px;
          height: 36px;
          line-height: 36px;
          .pen {
            display: none;
            margin-right: 10px;
          }
        }
        &:hover {
          .pen {
            display: inline;
          }
        }
      }
      .userinfo-but {
        margin-top: 10px;
      }
    }
  }
}
</style>

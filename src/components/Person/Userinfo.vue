<template>
  <div class="Userinfo-container fr boxshadow">
    <div class="title">
      <el-upload class="avatar-uploader fl" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <div class="basic fl">
        <span class="name fl" v-if="flag.name">{{ userinfo.name }}</span>
        <el-input v-else class="name-input" v-model="userinfo.name"></el-input>
        <span class="button iconfont" @click="flag.name = !flag.name">&#xe600; 修改</span>
        <div class="introduce">恭喜你已经成为凤达航空会员</div>
        <div class="gender box">
          <h3 class="fl">姓名：</h3>
          <div class="fl">
            <span v-if="flag.nameflag">{{ userinfo.realname }}</span>
            <el-input v-else class="gender-input" v-model="userinfo.realname"></el-input>
            <span class="button iconfont" @click="flag.nameflag = !flag.nameflag">&#xe600;修改</span>
          </div>
        </div>
        <div class="gender box">
          <h3 class="fl">性别</h3>
          <div class="fl">
            <span v-if="flag.genderflag">{{ userinfo.sex }}</span>
            <el-input v-else class="gender-input" v-model="userinfo.sex"></el-input>
            <span class="button iconfont" @click="flag.genderflag = !flag.genderflag">&#xe600;修改</span>
          </div>
        </div>
        <div class="box">
          <h3 class="fl">邮箱</h3>
          <div class="fl">
            <span v-if="flag.emilflag">{{ userinfo.emil }}</span>
            <el-input v-else class="emil-input" v-model="userinfo.emil"></el-input>
            <span class="button iconfont" @click="flag.emilflag = !flag.emilflag">&#xe600;修改</span>
          </div>
        </div>
        <div class="box">
          <h3 class="fl">电话</h3>
          <div class="fl">
            <span v-if="flag.tel">{{ userinfo.tel }}</span>
            <el-input v-else class="tel-input" v-model="userinfo.tel"></el-input>
            <span class="button iconfont" @click="flag.tel = !flag.tel">&#xe600;修改</span>
          </div>
        </div>
        <el-button class="userinfo-but" type="primary">提交保存</el-button>
        <el-button>取消</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: require(`@/assets/image/一栗小莎子.jpeg`),
      flag: {
        name: true,
        nameflag: true,
        genderflag: true,
        emilflag: true,
        tel: true,
      },
      userinfo: {
        name: '一粒小傻子',
        sex: '女',
        emil: '739559572@qq.com',
        tel: '11111111111',
        realname: 'lyx',
      },
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
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
          width: 80px;
          margin-right: 10px;
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
          span {
            margin-right: 10px;
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

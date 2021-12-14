<template>
  <div class="Userinfo-container fr">
    <div class="title">
      <el-upload class="avatar-uploader fl" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <div class="basic fl">
        <span class="name fl">123</span>
        <span class="button">修改</span>
        <div class="introduce">恭喜你已经成为凤达航空会员</div>
        <div class="gender box">
          <h3 class="fl">性别</h3>
          <div class="fl">
            <span>女</span>
            <span>修改</span>
          </div>
        </div>
        <div class="box">
          <h3 class="fl">邮箱</h3>
          <div class="fl">
            <span>女</span>
            <span>修改</span>
          </div>
        </div>
        <div class="box">
          <h3 class="fl">电话</h3>
          <div class="fl">
            <span>女</span>
            <span>修改</span>
          </div>
        </div>
        <div class="box">
          <h3 class="fl">职业</h3>
          <div class="fl">
            <span>女</span>
            <span>修改</span>
          </div>
        </div>
        <div class="box">
          <h3 class="fl">个人简介</h3>
          <div class="fl">
            <span>女</span>
            <span>修改</span>
          </div>
        </div>
        <div class="box">
          <h3 class="fl">教育经历</h3>
          <div class="fl">
            <span>女</span>
            <span>修改</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: require(`@/assets/image/一栗小莎子.jpeg`),
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
  height: 500px;
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
        div {
          margin-left: 20px;
          width: 100px;
          height: 36px;
          line-height: 36px;
          span {
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>

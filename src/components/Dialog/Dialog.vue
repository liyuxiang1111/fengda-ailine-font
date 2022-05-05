<template>
  <div>
    <el-dialog title="是否修改密码" :visible.sync="dialogVisible" width="30%">
      <el-input v-model="origin" clearable placeholder="源密码" class="input"></el-input>
      <el-input v-model="passwd" clearable placeholder="新密码" class="input"></el-input>
      <el-input v-model="second" show-password placeholder="再次确认"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="
            dialogVisible = false
            change()
          "
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import bus from '@/components/eventBus.js'
export default {
  mounted() {
    this.token = localStorage.getItem('Authorization')
    bus.$on('dialog', (val) => {
      this.dialogVisible = val
      console.log('ok')
    })
  },
  data() {
    return {
      token: '',
      origin: '',
      passwd: '',
      second: '',
      dialogVisible: false,
    }
  },
  methods: {
    change() {
      console.log('修改密码')
      if (this.passwd === this.second) {
        this.changepasswd()
      } else {
        alert('请填写相同的密码')
      }
    },
    async changepasswd() {
      await this.$http({
        url: '/passenger/password',
        method: 'post',
        headers: {
          Authorization: localStorage.getItem('Authorization'),
        },
        data: {
          userPwd: this.passwd,
        },
      }).then(({ data: res }) => {
        if (res.msg === 'success') {
          alert('密码修改成功')
          this.token = res.data
          localStorage.setItem('Authorization', this.token)
        } else {
          alert('修改失败')
          console.log(res)
        }
      })
    },
  },
}
</script>

<style>
.input {
  margin-bottom: 20px;
}
</style>

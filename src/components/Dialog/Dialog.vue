<template>
  <div>
    <el-dialog title="是否退出登录" :visible.sync="dialogVisible" width="30%">
      <span>退出登录</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import bus from '@/components/eventBus.js'
export default {
  created() {
    bus.$on('dialog', (val) => {
      this.dialogVisible = val
      console.log('ok')
    })
  },
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {},
}
</script>

<style></style>

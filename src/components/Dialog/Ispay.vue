<template>
  <div class="ispay-container">
    <el-dialog title="是否预购该机票" :visible.sync="dialogVisible" width="30%">
      <span>当前票余量：1000</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="
            dialogVisible = false
            pay()
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
  methods: {
    pay() {
      this.$router.push('/home/order')
    },
  },
}
</script>

<style></style>

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
    <div class="information"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      telephone: '',
      mail: '',
    }
  },
  methods: {
    next() {
      console.log()
      this.$router.push('/login')
    },
  },
}
</script>

<style lang="less" scoped>
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
  }
}
</style>

<template>
  <div class="imformation">
    <div class="imformation-content w">
      <slot name="left" class="fl"></slot>
      <slot name="right" class="fr"></slot>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
.imformation {
  position: absolute;
  width: 100%;
  min-width: 1300px;
  top: 80px;
  z-index: 999;
  border-top: 1px solid pink;
  background-color: #fff;
  .imformation-content {
    height: calc(100% - 26px);
    margin: 26px 355.6px;
    margin-bottom: 0;
  }
}
</style>
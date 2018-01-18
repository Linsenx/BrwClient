<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'gui-itembox-group'
}
</script>

<style lang="less" scoped>
  .gui-itembox {
    margin-bottom: 5px;
  }
  .gui-itembox:last-child {
    margin-bottom: 0px;
  }
</style>

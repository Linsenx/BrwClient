<template>
  <div class="gui-itembox">
    <div class="gui-iteminfo">
      <div class="gui-itembox_name">
        <gui-strokefont :text="name" />
      </div>
      <span class="gui-itembox-kind">
        <gui-strokefont :text="kind" />
      </span>
      <span class="gui-itembox-ammount">
        <gui-strokefont :text="effect + '/' + ammount" />
      </span>
    </div>
    <div class="gui-itembox-button">
      <gui-button :width="45" :height="38" @click="handleClick"><gui-strokefont text="使用" /></gui-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'gui-itembox',
    props: {
      name: {
        type: String,
        default: '???'
      },
      kind: {
        type: String,
        default: '???'
      },
      effect: {
        type: String,
        default: '?'
      },
      ammount: {
        type: String,
        default: '?'
      }
    },
    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
  }
</script>

<style lang="less" scoped>

</style>

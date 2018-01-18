<template>
  <div class="gui-mapblock" >
    <div v-if="this.loc != ''" class="gui-mapblock_bg" :style="img_mapblock">
      <div class="gui-mapblock_location">
        <gui-strokefont :text="loc"/>
      </div>
      <div class="gui-mapblock_mask"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gui-mapblock',
  props: {
    loc: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: '0'
    }
  },
  computed: {
    img_mapblock() {
      return {
        background: `url('./static/public/map/mapblock${this.icon}.png') no-repeat`,
        backgroundSize: "59px 59px"
      }
    }
  }
}
</script>

<style lang="less">
@import "~../../../theme/main.less";

  .gui-mapblock {
    position: relative;
    width: 59px;
    height: 59px;
    float: left;
    .gui-mapblock_bg, .gui-mapblock_mask {
      width: 59px;
      height: 59px;
    }
    .gui-mapblock_mask {
      position: absolute;
      left: 0px;
      top: 0px;
      &:hover {
        cursor: pointer;
        background: fadeout(@red, 60%);
      }
    }
    .gui-mapblock_location {
      width: 54px;
      height: 17px;
      margin: 2px auto;
      text-align: center;
      font-size: 10px;
      line-height: 17px;
      border-radius: 2px;
    }
  }
</style>

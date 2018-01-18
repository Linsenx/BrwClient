<template>
  <div>
    <div class="equipment">
      <div class="gui-tab-pane_title">
        <gui-strokefont :size="14" weight="bold" text="属性" />
      </div>
      <div class="gui-tab-pane_content">
        <ul>
          <li v-for="x in (1,2,3,4,5,6)">
            <gui-strokefont :size="14" text="武" />
            <gui-strokefont :size="12" text="黄铜灯柱" />
            <gui-strokefont :size="10" text="888" />
            <gui-strokefont :size="10" text="88" />
          </li>
        </ul>
      </div>
    </div>

    <div class="wepskills">
      <div class="gui-tab-pane_title">
        <gui-strokefont :size="14" weight="bold" text="熟练度" />
      </div>
      <div class="gui-tab-pane_content">
        <div class="block" v-for="x in (1,2,3,4,5)">
          <gui-strokefont :size="14" :text="['殴打','斩杀','射击','投掷','爆破'][x-1]" />
          <gui-strokefont :size="12" :text="String(Math.ceil(Math.random()*200))" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'game-stage-tabs-profile-attribute'
}
</script>

<style lang="less" scoped>
@import "~../../../theme/main.less";

.box-mixin(@color, @width: 30px) {
  text-overflow: hidden;
  display: inline-block;
  //flex-basis: @width;
  width: @width;
  height: 25px;
  line-height: 25px;
  border-radius: 5px;
  text-align: center;
  background: fadeout(@color, 20%);
}

.equipment {
  li {
    margin-bottom: 5px;
  }
  li:last-child {
    margin-bottom: 0px;
  }
  ul li span:nth-child(1) {
    .box-mixin(@blueDark_, 30px);
  }
  ul li span:nth-child(2) {
    .box-mixin(@blueDark_, 130px);
  }
  ul li span:nth-child(3) {
    .box-mixin(@blueLight, 40px);
  }
  ul li span:nth-child(4) {
    .box-mixin(@blue, 40px);
  }
}

.wepskills {
  .gui-tab-pane_content {
    width: 300px;
    .block {
      display: inline-block;
      margin: 0px 35px 5px 0px;
    }
    span:nth-child(1) {
      .box-mixin(@blueDark_, 50px);
    }
    span:nth-child(2) {
      .box-mixin(@blueLight, 50px);
    }
  }
}

// //Flex Box
// .flex-equipment-list {
//   display: flex;
//   span:nth-child(2) {
//     width: 20px;
//   }
// }
</style>

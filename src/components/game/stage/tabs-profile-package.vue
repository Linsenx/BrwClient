<template>
  <div class="package">
    <div class="gui-tab-pane_title">
      <gui-strokefont :size="14" weight="bold" text="包裹 (4/5)" />
    </div>
    <div class="gui-tab-pane_content">
      <div class="package-item">
        <gui-itembox-group>
          <gui-itembox />
          <gui-itembox />
          <gui-itembox />
          <gui-itembox />
          <gui-itembox />
        </gui-itembox-group>                                             
      </div>
    </div>
  </div>
</template>

<script>
  import itembox from '../../gui/itembox/itembox'
  import itemboxGroup from '../../gui/itembox/itembox-group'
  import progress from '../../gui/progress/progress'

  export default {
    name: 'game-stage-tabs-profile-package',
    components: {
      'gui-itembox': itembox,
      'gui-itembox-group': itemboxGroup,
      'gui-progress': progress,
    }
  }
</script>

<style lang="less" scoped>
  @import "~../../../theme/main.less";

  .gui-tab-pane_content {
    overflow-x: hidden;
    overflow-y: scroll;
    height: 370px;
    border-radius: 5px;
  }
  ::-webkit-scrollbar {
    display: none;
  }
</style>

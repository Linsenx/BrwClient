<template>
  <div class="game-tabs-profile">

    <gui-tabs id="abc">
      <gui-tab-pane name="属性面板" icon="body">
        <tabs-profile-attribute></tabs-profile-attribute>
      </gui-tab-pane>

      <gui-tab-pane name="背包管理" icon="bag">

      </gui-tab-pane>

      <gui-tab-pane name="技能面板" icon="cooking-pot">

      </gui-tab-pane>
    </gui-tabs>

  </div>
</template>

<script>
  import tabsProfileAttribute from './tabs-profile-attribute'

  export default {
    name: 'game-tabs-profile',

    components: {
      'tabs-profile-attribute': tabsProfileAttribute
    }
  }
</script>

<style lang="less" scoped>
#abc {
  position: absolute;
  left: 850pxssasdas;
  top: 136px;
}

</style>

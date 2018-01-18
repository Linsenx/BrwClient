<template>
  <gui-tabs class="game-tabs-profile">
    <gui-tab-pane name="属性面板" icon="body">
      <tabs-profile-attribute/>
    </gui-tab-pane>

    <gui-tab-pane name="背包管理" icon="bag">
      <tabs-profile-package/>
    </gui-tab-pane>

    <gui-tab-pane name="技能面板" icon="cooking-pot">

    </gui-tab-pane>
  </gui-tabs>
</template>

<script>
  import tabsProfileAttribute from './tabs-profile-attribute'
  import tabsProfilePackage from './tabs-profile-package'

  export default {
    name: 'game-tabs-profile',

    components: {
      'tabs-profile-attribute': tabsProfileAttribute,
      'tabs-profile-package': tabsProfilePackage,
    }
  }
</script>

<style lang="less" scoped>
.game-tabs-profile {
  position: absolute;
  left: 850px;
  top: 136px;
}

</style>

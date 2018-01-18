<template>
  <div class="game-stage">
    <game-panels-character />
    <game-tabs-profile />
    <game-tabs-information />
    <game-panels-map />
  </div>
</template>

<script>

import tabsProfile from './tabs-profile'
import tabsInformation from './tabs-information'
import panelsCharacter from './panels-character'
import panelsMap from './panels-map'

export default {
  name: 'game-stage',

  components: {
    'game-tabs-profile': tabsProfile,
    'game-tabs-information': tabsInformation,
    'game-panels-character': panelsCharacter,
    'game-panels-map': panelsMap,
  },
  
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style lang="less" scoped>
@import "~../../../theme/main.less";

.game-stage {
  width: 332px;
  margin: auto;
}

</style>


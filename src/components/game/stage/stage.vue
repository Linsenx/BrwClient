<template>
  <div class="game-stage">
    <game-tabs-profile></game-tabs-profile>
  </div>
</template>

<script>

import tabsProfile from './tabs-profile'

export default {
  name: 'game-stage',

  components: {
    'game-tabs-profile': tabsProfile
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


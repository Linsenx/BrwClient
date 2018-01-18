<template>
  <gui-tabs class="game-tabs-information">
    <gui-tab-pane name="聊天信息" icon="chat-bubble-points">
      <tabs-information-chat />
    </gui-tab-pane>

    <gui-tab-pane name="幸存者信息" icon="user">
      <tabs-information-alive />
    </gui-tab-pane>
  </gui-tabs>
</template>

<script>
import tabsInformationChat from './tabs-information-chat'
import tabsInformationAlive from './tabs-information-alive'

export default {
  name: 'game-stage-tabs-information',
  components: {
    'tabs-information-chat': tabsInformationChat,
    'tabs-information-alive': tabsInformationAlive
  }
}
</script>

<style>
.game-tabs-information {
  position: absolute;
  left: 12px;
  top: 135px;
}
</style>

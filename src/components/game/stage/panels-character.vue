<template>
  <div class="game-panels-character">
    <div class="game-panels-character_left">
      <div class="chara_avatar" :style="character_img">
        <gui-strokefont color="white" text="240/300"/>
      </div>
      <div class="chara_experience">
        <gui-progress :width="79" :height="6" 
                      :now="240" :max="300"
                      outer-color="white" inner-color="bluelight"/>
        <gui-strokefont text="Lv.255"/>
      </div>
    </div>
    <div class="game-panels-character_right">
      <div class="chara_name">
        <gui-strokefont text="暗夜之猫"/>
      </div>
      <div class="chara_sp">
        <gui-strokefont text="体力"/>
        <gui-strokefont class="right" text="240/300"/>
        <gui-progress inner-color="green" :width="155" :height="8" :now="240" :max="300"/>  
      </div>
      <div class="chara_hp">
        <gui-strokefont text="生命"/>
        <gui-strokefont class="right" text="380/400"/>
        <gui-progress inner-color="red" :width="155" :height="8" :now="380" :max="400"/>  
      </div>
      <div class="chara_attribute">
        <span class="chara_attack"><i class="icon-fight"/><gui-strokefont text="65535"/></span>
        <span class="chara_defend"><i class="icon-shield"/><gui-strokefont text="65535"/></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'game-stage-panels-character',
  computed: {
    character_img() {
      return {
        background: "url('./static/public/character/f249.png') no-repeat",
        backgroundSize: "75px 75px"
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import "~../../../theme/main.less";

.game-panels-character {
  position: absolute;
  left: 850px;
  top: 10px;
  width: 273px - 20px;
  height: 117px - 20px;
  padding: 10px;
  border-radius: 5px;
  .game-panels-character_left {
    float: left;
    width: 90px;
    height: 100px;
    text-align: center;
    .chara_avatar {
      width: 75px;
      height: 10px;
      padding-top: 65px;
    }
    .chara_experience {
      margin-top: 5px;
      width: 80px;
      height: 17px;
    }
  }
  .game-panels-character_right {
    float: left;
    .chara_name {
      width: 163px;
      height: 20px;
      border-radius: 5px;
      text-align: center;
    }
    .chara_sp, .chara_hp {
      margin-top: 5px;
      .right {
        float: right;
        margin-right: 10px;
      }
    }
    .chara_attribute {
      margin-top: 5px;
      text-align: center;
      i {
        font-size: 12px;
        margin: 0px 3px 0px 10px;
      }
    }
  }
}
</style>

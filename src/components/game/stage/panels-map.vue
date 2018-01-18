<template>
  <div class="game-panels-map">
    <div class="game-panels-map_bg" :style="img_islandbg">
      <div v-for="k in mapblocks" :key="id">
        {{ k.loc }}
      </div>
    </div>
  </div>
</template>

<script>
import mapblock from '../../gui/mapblock/mapblock'

export default {
  components: {
    'gui-mapblock': mapblock,
  },
  computed: {
    img_islandbg() {
      return {
        background: "url('./static/public/map/island.png') no-repeat",
        backgroundSize: "540px 480px"
      }
    }
  },
  data() {
    return {
      mapblocks: {
        12: {'loc':"北部住宅", 'icon':"0"},
        15: {'loc':"指挥中心", 'icon':"1"},
        16: {'loc':"军事基地", 'icon':"2"},
        20: {'loc':"北海公所", 'icon':"3"},
        21: {'loc':"邮电局", 'icon':"4"},
        22: {'loc':"杂货铺", 'icon':"5"},
        24: {'loc':"岗哨", 'icon':"6"},
        25: {'loc':"港口", 'icon':"7"},
        30: {'loc':"北海公所", 'icon':"8"},
        32: {'loc':"清水池", 'icon':"9"},
        34: {'loc':"山丘地带", 'icon':"10"},
        40: {'loc':"西部住宅", 'icon':"0"},
        42: {'loc':"学校", 'icon':"11"},
        44: {'loc':"废弃旅馆", 'icon':"12"},
        52: {'loc':"废弃大楼", 'icon':"1"},
        54: {'loc':"火山地带", 'icon':"13"},
        60: {'loc':"南部住宅", 'icon':"0"},
        62: {'loc':"医院", 'icon':"14"},
        64: {'loc':"灯塔", 'icon':"15"}
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import "~../../../theme/main.less";

.game-panels-map {
  position: absolute;
  left: 294px;
  top: 135px;
  width: 540px;
  height: 480px;
  border-radius: 5px;
  .game-panels-map_bg {
    width: 540px;
    height: 480px;
  }
  .gui-mapblock:nth-child(9n+9) {
    width: 60px;
    border-right: none;
  }
  .gui-mapblock:nth-child(n+64) {
    height: 60px;
    border-bottom: none;
  } 
}


</style>

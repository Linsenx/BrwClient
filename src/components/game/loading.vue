<template>
  <div class="game-loading">
    <div id="loading-bar">
      <div id="top" :style="{width: `${(progress.now/progress.total)*396}px`}"></div>
      <div id="bottom"></div>
      <transition mode="out-in" enter-active-class="animated slow fadeIn" leave-active-class="animated slow fadeOut">
        <div key="1" id="content" v-if="!progress.success">资源加载中 {{ progress.now + 1 }} / {{ progress.total }}</div>
        <div key="2" id="content" v-else>资源加载完毕，即将进入游戏</div>
      </transition>
    </div>
  </div>
</template>

<script>
//Tween Test
// import { Easing, Interpolation, Tween, autoPlay } from 'es6-tween'
// autoPlay(true)

export default {
  name: "game-loading",
  data() {
    return {
      progress: {
        now: 0,
        total: 0,
        success: false
      },
      number: 0
    }
  },
  created() {
    let list = this.getResourceList
    this.progress.now = 0
    this.progress.total = list.length
    let img = new Image()
    img.src = list[this.progress.now]
    img.onload = () => {
      this.progress.now++
      if (this.progress.now < this.progress.total) {
        img.src = list[this.progress.now]
      } else {
        this.progress.success = true
        setTimeout(() => {
          this.$router.push('/login')
        }, 2000)
      }
    }
  },
  computed: {
    getResourceList() {
      return this.$store.getters.getResource
    }
  }
}
</script>

<style lang="less">
@import "~../../theme/main.less";

#loading-bar {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 400px;
  height: 20px;
  #top {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 396px;
    height: 11px;
    border-radius: 3px;
  }
  #bottom {
    width: 400px;
    height: 15px;
    border-radius: 3px;
  }
  #content {
    text-align: right;
  }
}
</style>

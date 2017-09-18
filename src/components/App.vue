<template>
  <div id="app" class="darkSkin">
    <div class="container" :style="styleObject">
      <transition enter-active-class="animated fast fadeIn" leave-active-class="animated fase fadeOut">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scale: 1,
      marginTop: 0,
      marginLeft: 0,
    }
  },
  computed: {
    styleObject() {
      return {
        transform: `scale(${this.scale})`,
        marginTop: `${this.marginTop}px`,
        marginLeft: `${this.marginLeft}px`,
        background: `url(./static/images/dark/background/${this.$store.state.background}.png)`,
        backgroundSize: '1140px 720px'
      }
    }
  },
  created() {
    window.onresize = () => {
      let scale = window.innerHeight / 720
      //let scale = window.innerWidth / 1140
      //scale = scale <= 0.5 ? 0.5 : scale 
      scale = 1;
      this.resetWindowsize(scale)
    }
    this.resetWindowsize(window.innerHeight / 720)
  },
  methods: {
    resetWindowsize(scale) {
      this.scale = scale
      this.marginTop = (this.scale - 1) * 720 / 2
      this.marginLeft = (window.innerWidth - 1140) / 2
    },
  },
}
</script>

<style lang="less">
@import "~../theme/mainUI.less";
@import "~../theme/darkSkin.less";
@import "~../theme/whiteSkin.less";

.container {
  //游戏尺寸
  width: 1140px;
  height: 720px;
  //字体设置
  color: @white;
  font-size: 12px;
  font-weight: normal;
  font-family: "黑体";
  // font-family: "Open Sans", sans-serif
}

//清理默认CSS样式
body { -webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, button, input, textarea, th, td { margin:0; padding:0; }
h1, h2, h3, h4, h5, h6{ font-size:100%; }
address, cite, dfn, em, var { font-style:normal; }
code, kbd, pre, samp { font-family:couriernew, courier, monospace; }
small{ font-size:12px; }
ul, ol { list-style:none; }
a { text-decoration:none; }
a:hover { text-decoration:underline; }
sup { vertical-align:text-top; }
sub{ vertical-align:text-bottom; }
fieldset, img { border:0; }
input { border:0; outline:none; }
table { border-collapse:collapse; border-spacing:0; }

</style>

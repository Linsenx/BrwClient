<template>
  <span>
    <span v-if="strokeType == 0" class="content" :style="[fontStyle,contentStyle]">{{text}}
      <span class="stroke" :style="[fontStyle,strokeStyle]">{{text}}</span>
    </span>
    <span v-else-if="strokeType == 1" :style="[fontStyle,contentStyle]">{{text}}</span>
    <span v-else-if="strokeType == 3">
    <svg  :height="size+strokeWidth*4">  
      <text class="stroke" 
        x="0" 
        :y="size"
        :font-size="size"
        :stroke="strokeColor"
        :stroke-width="strokeWidth*2"
        stroke-linejoin="round"
        :fill="strokeColor"
      >
      {{text}}
      </text>  
      <text class="content" 
        x="0" 
        :y="size"
        :height="size"
        :font-size="size"
        :fill="color"
      >
      {{text}}
      </text>  
    </svg>  
    </span>

  </span>
</template>

<script>
export default {
  name: "gui-strokefont",
  props: {
    text: {
      type: String,
      default: ""
    },
    size: {
      type: Number,
      default: 12
    },
    spacing: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: 'white'
    },
    strokeType: { //描边实现方式 0:text-stroke 1:text-shadow 3:svg(未完善)
      type: Number,
      default: 0
    },
    strokeColor: {
      type: String,
      default: 'black'
    },
    strokeWidth: {
      type: Number,
      default: 1.5
    }
  },

  created() {
    //浏览器若不支持text-stroke描边改为text-shadow描边
    if (!this.supportCss3('text-stroke')) {
      this.strokeType = 1
    }
    // || navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)
  },

  methods: {
    supportCss3(style) {
      var prefix = ['webkit', 'Moz', 'ms', 'o'],
        i,
        humpString = [],
        htmlStyle = document.documentElement.style,
        _toHumb = function(string) {
          return string.replace(/-(\w)/g, function($0, $1) {
            return $1.toUpperCase();
          });
        };
      for (i in prefix)
        humpString.push(_toHumb(prefix[i] + '-' + style));
      humpString.push(_toHumb(style));
      for (i in humpString)
        if (humpString[i] in htmlStyle) return true;
      return false;
    }    
  },

  computed: {
    fontStyle() {
      let style = {}
      style.fontSize = `${this.size}px`
      style.letterSpacing = `${this.spacing}px`
      return style
    },
    shadowStroke() {
      let rules = []
      let limit = 1e-6
      let angle = 2 * Math.PI
      let angleOffset = angle / 24
      for (let i = 0; i <= angle; i += angleOffset) {
        let x = this.strokeWidth * Math.cos(i);
        let y = this.strokeWidth * Math.sin(i);
        x = (Math.abs(x) < limit) ? '0' : x.toString();
        y = (Math.abs(y) < limit) ? '0' : y.toString();
        rules.push(x + "px " + y + "px 0px " + this.strokeColor);
      }
      return rules.join(',')
    },
    contentStyle() {
      let style = {}
      style.color = `${this.color}`
      if (this.strokeType == 1) {
        style.textShadow = this.shadowStroke
      }
      return style
    },
    strokeStyle() {
      let style = {}
      if (this.strokeType != 0) {
        style.display = 'none'
      } else {
        let realStrokeWidth = this.strokeWidth * 2
        style.textStroke = `${realStrokeWidth}px ${this.strokeColor}`
      }
      return style
    },
  }
}
</script>

<style lang="less" scoped>

.content {
  -webkit-font-smoothing: antialiased;
  white-space: nowrap;
  display: inline-block;
  position: relative;
  z-index: 0;
}

.stroke {
  white-space: nowrap;
  display: inline-block;
  position: absolute;
  left: 0;
  z-index: -1;
}
</style>

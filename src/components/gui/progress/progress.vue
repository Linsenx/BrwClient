<template>
  <div class="gui-progress"
      :class="[
        `_outer__${outerColor}`,
        `_inner__${innerColor}`,
      ]"
  >
    <div class="gui-progress_outer" :style="outerStyle">
      <div class="gui-progress_inner" :style="innerStyle">
        <div v-if="showProgress" class="gui-progress_title" :style="{width: `${width}px` }">
          <gui-strokefont :text="(now/max) | formatProgrssNumber" />
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'gui-progress',
  props: {
    outerColor: {
      type: String,
      default: 'bluedark'
    },
    innerColor: {
      type: String,
      default: 'green'
    },
    width: {
      type: Number,
      default: 250
    },
    height: {
      type: Number,
      default: 10
    },
    showProgress: {
      type: Boolean,
      default: false
    },
    now: {
      type: Number,
      default: 100
    },
    max: {
      type: Number,
      default: 100
    }
  },

  computed: {
    outerStyle() {
      let style = {};
      style.width = this.width + 'px';
      style.height = style.lineHeight = this.height + 'px';
      return style;
    },
    innerStyle() {
      let style = {};
      let progress = Math.min(1, (this.now/this.max));
      style.width = this.width * progress + 'px';
      style.height = style.lineHeight = this.height + 'px';
      return style;
    }
  },

  filters: {
    formatProgrssNumber(value) {
      if (String(value).indexOf('.') > -1) {
        value = value.toFixed(1);
      }
      return String(value) + '%';
    }
  }
}
</script>

<style>

</style>

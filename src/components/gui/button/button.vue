<template>
  <button class="gui-button" 
    @click="handleClick"
    :class="[
      `__${color}`,
      `__${type}`,
    ]"
    :style="buttonStyle"
  >
    <slot></slot>
  </button>
</template>
    
<script>

//<gui-button color="red">Hello Gui</gui-button>

export default {
  name: 'gui-button',
  props: {
    color: {
      type: String,
      default: 'bluelight'
    },
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    radius: {
      type: Number,
      default: 5
    },
    type: {
      type: String,
      default: 'small'
    },
  },
  computed: {
    buttonStyle() {
      let style = {}
      if (this.radius != 0) {
        style.borderRadius = `${this.radius}px`
      }
      if (this.width > 0) {
        style.width = `${this.width}px`
      }
      if (this.height > 0) {
        style.height = `${this.height}px`
      }
      return style
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
}
</script>

<style lang="less" scoped>

</style>
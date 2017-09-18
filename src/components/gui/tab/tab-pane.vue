<template>
  <div class="gui-tab-pane" v-show="show">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'gui-tab-pane',

    props: {
      icon: String,
      name: String,
      // active: Boolean
    },

    data() {
      return {
        index: null
      }
    },

    created() {
      if (!this.index) {
        this.index = this.$parent.$children.indexOf(this) + 1;
      }
    },

    computed: {
      show() {
        return this.$parent.activeIndex == this.index
      }
    }
  }
</script>
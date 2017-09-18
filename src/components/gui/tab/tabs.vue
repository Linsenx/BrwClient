<template>
  <div class="gui-tabs">

    <div class="gui-tabs_header"> 
      <span v-for="(tab, index) in this.$children" :key="index">
          <i class="gui-tabs_header_tab" 
            :class="[
              `icon-${tab.icon}`,
              {
                'active': tab.show
              }
            ]"
            @click="handleTabClick(tab, $event)" 
          />
      </span>
    </div>

    <div class="__content">
      <slot></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'gui-tabs',

    data() {
      return {
        activeTab: null,
        activeIndex: 1
      }
    },

    mounted() {
      this.$nextTick(() => {
        this.$forceUpdate()
      })
    },

    methods: {
      handleTabClick(tab, ev) {
        this.activeTab = tab
        this.activeIndex = tab.index
        this.$emit('tab-click', tab, ev)
      }
    },

    // render(h) {
    //   const tabs_ = this.$children.map((tab, index) => {
    //     let icon = `icon-${tab.icon}`
    //     return (
    //       <i class={icon} />
    //     )
    //   })

    //   return (
    //     <div class="gui-tabs">
    //       <div class="gui-tabs__title"> 
    //         {tabs_}
    //       </div>
    //       <div class="gui-tabs__content">
    //         {this.$slots.default}
    //       </div>
    //     </div>
    //   )
    // }
  }
</script>










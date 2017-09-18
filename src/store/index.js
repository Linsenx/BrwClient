import Vue from 'vue'
import Vuex from 'vuex'
import player from './modules/player'
import resource from './modules/resource'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    background: 'bg0'
  },

  modules: {
    player,
    resource,
  },

})

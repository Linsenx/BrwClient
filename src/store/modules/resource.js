//initial state
const state = {
  bra: {
    resource: [
      //backgrounds
      './static/dark/images/background/bg0.png',
      //character
      './static/public/character/f249.png',
      //map
      './static/public/map/island.png',
    ]
  }
}

//initial getters
const getters = {
  getResource: state => state.bra.resource
}

export default {
  state,
  getters
}

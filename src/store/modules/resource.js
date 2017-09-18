//initial state
const state = {
  bra: {
    resource: [
      //backgrounds
      './static/images/dark/background/bg0.png',
      //icons
      // './static/images/dark/icon/User-Icon.png',
      // './static/images/dark/icon/Lock-Icon.png',
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

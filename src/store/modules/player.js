// initial state
const state = {
    level: 100
}

// initial getter
const getters = {
    checklv: state => state.level
}

//inital actions
const actions = {
    getLevelUp({ commit }) {
        setTimeout(function () {
            commit('increseLevel')
        }, 1000)
    }
}

// initial mutations
const mutations = {
    increseLevel (state) {
        state.level ++
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}

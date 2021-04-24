import { createStore } from 'vuex'

const initState = {
  count: 0
}

export default createStore({
  // vue3 state 为函数式写法
  state () {
    return initState
  },
  mutations: {
    incrementCount (state: typeof initState) {
      state.count += 1
    }
  },
  actions: {
    updateCount: ({ commit }) => {
      commit('incrementCount')
    }
  }
})

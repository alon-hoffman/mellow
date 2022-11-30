import Vuex from 'vuex'

import { userStore } from './user.store.js'
import { carStore } from './car.store.js'

export const store = Vuex.createStore({
  strict: true,
  modules: {
    userStore,
    carStore,
  },
  state: {
    isScreen: false,
  },
  getters: {
    isScreen(state) {
      return state.isScreen
    }
  },
  mutations: {
    toggleScreen({ isScreen }) {
      isScreen = !isScreen
    },
  },
  actions: {
  }
})

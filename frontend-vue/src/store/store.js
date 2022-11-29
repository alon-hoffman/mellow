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
  },
  mutations: {
  },
  actions: {
  }
})

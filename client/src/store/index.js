import { createStore, createLogger } from 'vuex'
import request from './modules/request.module'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  plugins: [createLogger()],
  modules: {
    request
  }
})

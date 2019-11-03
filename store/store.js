import Vuex from 'vuex'
// modules
import auth from './modules/auth'

export const store = new Vuex.Store({
  modules: {
    auth
  }
})

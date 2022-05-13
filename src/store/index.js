import Vue from 'vue'
import Vuex from 'vuex'
import state from './modules/state'
import mutations from './modules/mutations'
import getters from './modules/Getter'
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
})

export default new Vuex.Store({
  state,
  mutations,
  getters,
  plugins: [vuexLocal.plugin],
})

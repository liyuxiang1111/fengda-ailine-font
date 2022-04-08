import Vue from 'vue'
import Vuex from 'vuex'
import state from './modules/state'
import mutations from './modules/mutations'
import getter from './modules/Getter'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  getter,
})

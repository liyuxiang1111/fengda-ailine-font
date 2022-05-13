import Vue from 'vue'
import Vuex from 'vuex'
import state from './modules/state'
import mutations from './modules/mutations'
import getters from './modules/Getter'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

const paths = [
  state.name,
  state.menberName,
  state.certificate,
  state.certificateType,
  state.beginCity,
  state.endCity,
  state.beginTime,
  state.endTime,
  state.telephone,
  state.email,
  state.payId,
  state.price,
  state.seat,
  state.flightId,
  state.grade,
]

export default new Vuex.Store({
  state,
  mutations,
  getters,
  plugins: [
    // 默认储存在localstorage
    createPersistedState({
      // 本地储存名
      key: 'user',
      // 指定模块
      state,
    }),
  ],
})

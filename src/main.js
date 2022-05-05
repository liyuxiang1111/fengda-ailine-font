import Vue from 'vue'
import App from './App.vue'
import router from './router'
import api from './api/index.js'
import store from './store/'
import '@/assets/css/iconfont.css'
// 引入elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// qs
import qs from 'qs'
Vue.use(ElementUI)
Vue.use(qs)

// 引入antd
// 引入地图全局样式
import 'leaflet/dist/leaflet.css'
//导入公用组件 如果多可以自行添加文件
import { Message } from 'element-ui'
Vue.component(Message.name, Message)
Vue.prototype.$message = Message
// 全局过滤器
// 全局时间过滤器
import { formatDate, formatDateTimeSec } from '@/util/formatDate.js'
Vue.filter('formatDate', formatDate)
Vue.filter('formatDateTime', formatDateTimeSec)

// axios
//确定默认请求路径
// axios.defaults.baseURL = 'http://heyongqiang.work:8888'
Vue.prototype.$http = api.tx
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

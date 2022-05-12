import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import axios from 'axios'
import api from './api/index.js'
import store from './store/'
import '@/assets/css/iconfont.css'
// 引入elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 引入antd
// 引入地图全局样式
import 'leaflet/dist/leaflet.css'
//确定默认请求路径
// axios.defaults.baseURL = 'http://www.heyongqiang.work:8888'
Vue.prototype.$http = api.ali
//导入公用组件 如果多可以自行添加文件
import { Message } from 'element-ui'
Vue.component(Message.name, Message)
Vue.prototype.$message = Message
// 全局过滤器
// 全局时间过滤器
import { formatDate, formatDateTimeSec } from '@/util/formatDate.js'
Vue.filter('formatDate', formatDate)
Vue.filter('formatDateTime', formatDateTimeSec)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 导入需要的组件
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import Register from '@/views/Register.vue'
// 导入注册需要的组件
import Step1 from '@/components/Register/Step1.vue'
import Step2 from '@/components/Register/Step2.vue'
import Step3 from '@/components/Register/Step3.vue'
//导入个人页面需要的组件
import Person from '@/views/Person.vue'
import Histroy from '@/components/Person/History.vue'
import Userinfo from '@/components/Person/Userinfo.vue'
import Ticket from '@/components/Person/Ticket.vue'
import Back from '@/components/Person/Back.vue'
//导入home页面需要的组件
import Select from '@/components/Home/Tool/Select.vue'
import Order from '@/components/Home/Tool/Order.vue'
import Pay from '@/components/Home/Tool/Pay.vue'
import End from '@/components/Home/Tool/End.vue'
// 错误
import Error404 from '@/components/Common/404.vue' //404
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/login', name: 'Login', component: Login },
  {
    path: '/register',
    component: Register,
    children: [
      { path: '', redirect: '/register/step1' },
      { path: 'step1', component: Step1 },
      { path: 'step2', component: Step2 },
      { path: 'step3', component: Step3 },
    ],
  },
  {
    path: '/home',
    component: Home,
    children: [
      { path: '', component: Select },
      { path: 'order', component: Order },
      { path: 'pay', component: Pay },
      { path: 'end', component: End },
      { path: 'error', component: Error404 },
    ],
  },
  {
    path: '/person',
    component: Person,
    children: [
      { path: '', component: Ticket },
      { path: 'history', component: Histroy },
      { path: 'userinfo', component: Userinfo },
      { path: 'ticket', component: Ticket },
      { path: 'back', component: Back },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})


router.beforeEach((to, from, next) => {
  if (to.path === '/home') {
    next() //访问的是主页，直接放行
  }else if (to.path !== ('/login')) {
    const token = localStorage.getItem( 'Authorization')
    if (token) {
      next() //访问的是后台主页，且有token 的值
    }else {
      next('/login') //访问的是后台主页，但是没有token 的值
    }
  }else{
    next() //访问的不是后台主页，直接放行
  }
  // 注册的逻辑
  // 在第一步不能跳到第二步以及第三步
  
})


export default router

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
import Index from '@/components/Home/Index.vue'
import Select from '@/components/Home/Tool/Select.vue'
import Order from '@/components/Home/Tool/Order.vue'
import Pay from '@/components/Home/Tool/Pay.vue'
import End from '@/components/Home/Tool/End.vue'
// 错误
import Error404 from '@/components/Common/404.vue' //404
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/login', name: 'Login', component: Login, meta: { isAuth: true } },
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
      {
        path: '/',
        component: Index,
        meta: {
          keepAlive: true, // 需要缓存
          isAuth: false, // 需要登录
        },
      },
      {
        path: 'select',
        component: Select,
        meta: {
          keepAlive: true, // 需要缓存
          isAuth: true, // 需要登录
        },
      },
      {
        path: 'order',
        component: Order,
        meta: {
          keepAlive: true, // 需要缓存
          isAuth: true, // 需要登录
        },
      },
      {
        path: 'pay',
        component: Pay,
        meta: {
          keepAlive: true, // 需要缓存
          isAuth: true, // 需要登录
        },
      },
      {
        path: 'end',
        component: End,
        meta: {
          keepAlive: true, // 需要缓存
          isAuth: true, // 需要登录
        },
      },
      { path: 'error', component: Error404 },
    ],
    meta: { isAuth: true },
  },
  {
    path: '/person',
    component: Person,
    children: [
      { path: '', component: Ticket, meta: { isAuth: true } },
      { path: 'history', component: Histroy, meta: { isAuth: true } },
      { path: 'userinfo', component: Userinfo, meta: { isAuth: true } },
      { path: 'ticket', component: Ticket, meta: { isAuth: true } },
      { path: 'back', component: Back, meta: { isAuth: true } },
    ],
    meta: { isAuth: true },
  },
]

const router = new VueRouter({
  mode: 'history', // 历史模式
  base: process.env.BASE_URL,
  routes,
})

// router.beforeEach((to, from, next) => {
//   let token = localStorage.getItem('Authorization') || ''
//   if (token) {
//     // 有token时直接放行
//     next()
//   } else {
//     // 没有token时需要登录
//     if (to.path == '/login' || to.path == '/register' || to.path == '/home') {
//       next()
//     } else {
//       if (to.meta.isAuth) {
//         router.replace('/login')
//       } else {
//         next()
//       }
//     }
//   }
// })

export default router

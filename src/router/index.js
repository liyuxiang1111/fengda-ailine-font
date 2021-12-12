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
const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/register',
    component: Register,
    children: [
      { path: '', component: Step1 },
      { path: 'step2', component: Step2 },
      { path: 'step3', component: Step3 },
    ],
  },
  { path: '/home', component: Home },
  { path: '/person', component: Person },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router

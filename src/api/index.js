import axios from 'axios'
import router from '../router'
import { Message } from 'element-ui'
const ali = axios.create({
  baseURL: 'https://heyongqiang.work',
  timeout: 6000,
})

// const tx = axios.create({
//   baseURL: '',
//   timeout: 6000,
// })

// Add a request interceptor
ali.interceptors.request.use(
  function (config) {
    // 不需要拦截的url
    let noIntercept = ['flight/search']
    // Do something before request is sent
    let token = localStorage.getItem('Authorization') || ''
    config.headers['Authorization'] = token
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
ali.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response
  },
  function (error) {
    // Message.error({ message: error.message })
    if (error.response.status == 504) {
      //	充当网关或代理的服务器，未及时从远端服务器获取请求
      Message.error({ message: '找不到服务器' })
    } else if (error.response.status == 403) {
      //服务器理解请求客户端的请求，但是拒绝执行此请求
      Message.error({ message: '权限不足，请联系管理员' })
    } else if (error.response.status == 401) {
      //请求要求用户的身份认证
      Message.error({ message: '尚未登录，请登录' })
      router.replace('/login') //跳转到登陆页
    } else if (error.response.status == 404) {
      Message.error({ message: '服务器无法根据客户端的请求找到资源' })
      router.replace('/home/error')
    } else if (error.response.status == 500) {
      Message.error({ message: '服务器内部错误，无法完成请求' })
    } else {
      if (error.response.data) {
        Message.error({ message: error.response.data.msg })
      } else {
        Message.error({ message: '未知错误!' })
      }
    }
    return Promise.reject(error)
  }
)

// Add a request interceptor
// tx.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     return config
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error)
//   }
// )

// // Add a response interceptor
// tx.interceptors.response.use(
//   function (response) {
//     // Do something with response data
//     return response
//   },
//   function (error) {
//     // Do something with response error
//     return Promise.reject(error)
//   }
// )

export default {
  ali,
}

import axios from 'axios'
import Vue from 'vue'
const ali = axios.create({
  baseURL: 'http://www.heyongqiang.work:8888',
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
    Vue.$router.push('/login')
  }
)

// Add a response interceptor
ali.interceptors.response.use(
  function (response) {
    // Do something with response data
    if (response.data.code === 404) {
      this.$router.push('/home/error')
    } else if (response.data.code >= 500) {
      Vue.$message({
        message: res.msg,
        type: 'error',
      })
    }
    return response
  },
  function (error) {
    // Do something with response error
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

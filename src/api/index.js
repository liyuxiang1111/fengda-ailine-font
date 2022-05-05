import axios from 'axios'

const ali = axios.create({
  baseURL: '',
  timeout: 6000,
})

const tx = axios.create({
  baseURL: 'http://heyongqiang.work:8888',
  timeout: 6000,
})

// Add a request interceptor
tx.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.withCredentials = true
    let token = localStorage.getItem('Authorization')
    if (token) {
      config.headers = {
        'Authorization': token,
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
tx.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error)
  }
)

export default {
  ali,
  tx,
}

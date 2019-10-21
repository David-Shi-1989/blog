import axios from 'axios'

axios.defaults.timeout = 60000 // 1 minute timeout

// http request 拦截器
axios.interceptors.request.use(
  config => {
    config.headers['x-request-from'] = 'sww'
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)
export default axios

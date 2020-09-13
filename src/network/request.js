import Axios from 'axios'

export function request(config) {
  const instance = Axios.create({
    // baseURL: 'http://39.101.190.55:8081',
    baseURL: 'http://localhost:8081',
    timeout: 5000
  })

  instance.interceptors.request.use(
    config => {
      return config
    },
    err => {
      console.log(err)
    }
  )

  instance.interceptors.response.use(
    res => {
      return res.data
    },
    err => {
      console.log(err)
    }
  )
  return instance(config)
}

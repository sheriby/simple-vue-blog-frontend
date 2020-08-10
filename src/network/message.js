import { request } from './request'

export function getMessage() {
  return request({
    url: '/comment/message'
  })
}

export function postMessage(data) {
  return request({
    url: '/comment/message',
    method: 'post',
    data: data
  })
}

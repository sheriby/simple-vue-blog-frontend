import { request } from './request'

export function postComment(data) {
  return request({
    url: '/comment',
    method: 'post',
    data: data
  })
}


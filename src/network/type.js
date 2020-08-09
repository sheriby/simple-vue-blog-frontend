import { request } from './request'

export function getTypeInfo(id, page) {
  return request({
    url: '/type/' + id + '/' + page
  })
}

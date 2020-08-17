import { request } from './request'

export function getTypeInfo(id, page) {
  return request({
    url: '/type/' + id + '/' + page
  })
}

export function getTypes() {
  return request({
    url: '/type'
  })
}

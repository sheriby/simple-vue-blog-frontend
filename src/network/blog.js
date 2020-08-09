import { request } from './request'

export function getBlogDetail(id) {
  return request({
    url: '/blog/' + id
  })
}

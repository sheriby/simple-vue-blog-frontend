import { request } from './request'

export function getBlogDetail(id) {
  return request({
    url: '/blog/' + id
  })
}

export function getComment(id) {
  return request({
    url: '/blog/comment/' + id
  })
}

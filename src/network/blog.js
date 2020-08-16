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

export function searchInfo(keyword) {
  const params = new URLSearchParams()
  params.append('keyword', keyword)

  return request({
    url: '/blog/search/info',
    params
  })
}

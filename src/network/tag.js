import { request } from './request'

export function getTagInfo() {
  return request({
    url: '/tag'
  })
}

export function getBlogs(tagId, page) {
  return request({
    url: '/tag/' + tagId + '/' + page
  })
}

import { request } from './request'

export function getTagInfo(id) {
  if (id === undefined || id === null) {
    return request({
      url: '/tag'
    })
  }
  return request({
    url: '/tag',
    params: { id }
  })
}

export function getBlogs(tagId, page) {
  return request({
    url: '/tag/' + tagId + '/' + page
  })
}

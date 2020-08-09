import { request } from './request'

export function getBlogInfo(page) {
  return request({
    url: '/blog/page/' + page
  })
}

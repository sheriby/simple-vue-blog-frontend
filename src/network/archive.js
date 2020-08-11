import { request } from './request'

export function getArchive() {
  return request({
    url: '/blog/archive'
  })
}

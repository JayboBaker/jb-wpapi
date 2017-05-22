import request from 'superagent'
import path from 'path'

const mockEndpoint = path.resolve(__dirname, './mock/allPages.json')

export function fetchPage (slug) {
  return request
    .get(`${mockEndpoint}`)
    .then(res => res.body.filter(x => x.slug === slug))
}

import request from 'superagent'
import { wpApiUrl } from '../../app/constants'

const pagesEndPoint = `${wpApiUrl}/wp-json/wp/v2/pages` // Endpoint for getting Wordpress Pages

const mockEndpoint = '../../../mock/allPages.json'
export function fetchPage (slug) {
  return request
    .get(`${mockEndpoint}`)
    .then(res => res.body.filter(x => x.slug === slug))
}
// export function fetchPage (slug) {
//   return request
//     .get(`${pagesEndPoint}/?slug=${slug}`)
//     .then(res => res.body)
// }

import request from 'superagent'
import { wpApiUrl } from '../../app/constants'

const pagesEndPoint = `${wpApiUrl}/wp-json/wp/v2/pages` // Endpoint for getting Wordpress Pages

export function fetchPage (slug) {
  return request
    .get(`${pagesEndPoint}/?slug=${slug}`)
    .then(res => res.body)
}

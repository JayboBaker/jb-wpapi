import request from 'superagent'
import { wpApiUrl } from '../../app/constants'

const menuEndpoint = `${wpApiUrl}/wp-json/wp-api-menus/v2/menus` // Endpoint for getting Wordpress Menu

export function fetchNav (navId) {
  return request
    .get(`${menuEndpoint}/${navId}`)
    .then(res => res.body)
}

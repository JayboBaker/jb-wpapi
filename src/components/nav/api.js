import request from 'superagent'
import { wpApiUrl, mainNavLocation, headerNavId } from '../../app/constants'

const menuEndpointMain = `${wpApiUrl}/wp-json/wp-api-menus/v2/menu-locations`
const menuEndpointHeader = `${wpApiUrl}/wp-json/wp-api-menus/v2/menus`

export function fetchMainNav () {
  return request
    .get(`${menuEndpointMain}/${mainNavLocation}?depth=2&per_page=100`)
    .then(res => res.body)
}

export function fetchHeaderNav () {
  return request
    .get(`${menuEndpointHeader}/${headerNavId}`)
    .then(res => res.body)
}

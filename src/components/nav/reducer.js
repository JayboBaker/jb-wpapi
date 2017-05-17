import { GET_MAIN_NAV_SUCCEED, GET_HEADER_NAV_SUCCEED } from './actions'

const initialState = {
  main: {},
  header: {}
}

export default (state = initialState, {payload, type}) => {
  switch (type) {
    case GET_MAIN_NAV_SUCCEED: return {
      ...state,
      main: payload
    }
    case GET_HEADER_NAV_SUCCEED: return {
      ...state,
      header: payload
    }
    default: return state
  }
}

import { GET_PAGE_SUCCEED } from './actions'

const initialState = {}

export default (state = initialState, {payload, type}) => {
  switch (type) {
    case GET_PAGE_SUCCEED: return {
      ...state,
      ...payload[0]
    }
    default: return state
  }
}

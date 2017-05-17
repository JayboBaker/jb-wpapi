import { APP_LOADING_SUCCEED } from './actions'

const initialState = {}

export default (state = initialState, {payload, type}) => {
  switch (type) {
    case APP_LOADING_SUCCEED: return {
      ...state,
      ...payload
    }
    default: return state
  }
}

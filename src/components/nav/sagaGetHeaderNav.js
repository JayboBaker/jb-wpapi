import { takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import { getHeaderNavSucceed, getHeaderNavFailed, GET_HEADER_NAV_STARTED } from './actions'
import { fetchHeaderNav } from './api'

export default function * watchGetMainNav () {
  yield takeLatest(GET_HEADER_NAV_STARTED, function * watch () {
    try {
      const response = yield call(fetchHeaderNav)
      yield put(getHeaderNavSucceed(response))
    } catch (err) {
      yield put(getHeaderNavFailed())
      if (!err.status) {
        throw err
      }
    }
  })
}

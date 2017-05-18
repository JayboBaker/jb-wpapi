import { takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import { getMainNavSucceed, getMainNavFailed, GET_MAIN_NAV_STARTED } from './actions'
import { fetchMainNav } from './api'

export default function * watchGetMainNav () {
  yield takeLatest(GET_MAIN_NAV_STARTED, function * watch () {
    try {
      const response = yield call(fetchMainNav)
      yield put(getMainNavSucceed(response))
    } catch (err) {
      yield put(getMainNavFailed())
      if (!err.status) {
        throw err
      }
    }
  })
}

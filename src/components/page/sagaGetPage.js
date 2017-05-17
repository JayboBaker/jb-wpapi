import { takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import { getPageSucceed, getPageFailed, GET_PAGE_STARTED } from './actions'
import { fetchPage } from './api'

export default function * watchGetPage () {
  yield takeLatest(GET_PAGE_STARTED, function * watch ({payload}) {
    try {
      const response = yield call(fetchPage, payload)
      yield put(getPageSucceed(response))
    } catch (err) {
      yield put(getPageFailed())
      if (!err.status) {
        throw err
      }
    }
  })
}

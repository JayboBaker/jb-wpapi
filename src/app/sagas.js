import { takeLatest } from 'redux-saga'
import { fork, put } from 'redux-saga/effects'

import { APP_LOADING_STARTED, appLoadingSucceed, appLoadingFailed } from './actions'
import { getMainNavStarted, getHeaderNavStarted } from '../components/nav/actions'

import sageGetPage from '../components/page/sagaGetPage'
import sagaGetMainNav from '../components/nav/sagaGetMainNav'
import sagaGetHeaderNav from '../components/nav/sagaGetHeaderNav'

export function * initializeAppState () {
  try {
    yield [
      put(getMainNavStarted()),
      put(getHeaderNavStarted()),
      put(appLoadingSucceed())
    ]
  } catch (error) {
    yield put(appLoadingFailed())
    throw error
  }
}

export function * sagaInitializeAppState () {
  yield * takeLatest(APP_LOADING_STARTED, initializeAppState)
}

export default function * startCrunchWatcher () {
  yield fork(sagaInitializeAppState)
  yield fork(sagaGetHeaderNav)
  yield fork(sagaGetMainNav)
  yield fork(sageGetPage)
}

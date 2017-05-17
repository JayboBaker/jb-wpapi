import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import 'babel-polyfill'

import sagas from './sagas'
// import promiseMiddleware from 'redux-promise-middleware'

import reducer from './reducer'
import nav from '../components/nav/reducer'
import page from '../components/page/reducer'

const sagaMiddleware = createSagaMiddleware()

const devTools = process.env.NODE_ENV !== 'production' && typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
  ? window.devToolsExtension()
  : f => f

let appReducer = combineReducers({
  reducer,
  nav,
  page
})

let STORE = null

export function createAppStore (history) {
  STORE = createStore(
    appReducer,
    compose(
      applyMiddleware(
        // promiseMiddleware(),
        sagaMiddleware
      ),
      devTools
    )
  )
  sagaMiddleware.run(sagas)
}

export function store () {
  return STORE
}

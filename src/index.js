import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import promisePolyfill from 'es6-promise'

import Routes from './app/routes'
import { appLoadingStarted } from './app/actions'
import { createAppStore, store } from './app/store'

promisePolyfill.polyfill()
const appHistory = browserHistory
createAppStore(appHistory)
const appStore = store()

const renderApp = () => render(
  <Provider store={appStore}>
    <Routes history={appHistory} dispatch={appStore.dispatch} />
  </Provider>,
  document.getElementById('app')
)

appStore.dispatch(appLoadingStarted())

renderApp()

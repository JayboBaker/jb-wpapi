import React from 'react'
import {
  IndexRoute,
  Redirect,
  Route,
  Router
} from 'react-router'

import { getPageStarted } from '../components/page/actions'

import App from '../components/App'
import Page from '../components/page/Page'

// const setDocumentTitle = (a) => { document ? document.title = a : null }
//
// const onEnter = title => nextState => {
//   const pageTitle = `Crunch - ${title}`
//   setDocumentTitle(pageTitle)
// }

export default function (props) {
  const { history, dispatch } = props

  return (
    <Router history={history}>
      <Route path='/' component={App} >
        <IndexRoute component={Page} />
        <Route component={Page} path='/:slug'
          onEnter={(props) => {
            dispatch(getPageStarted(props.params.slug))
          }}
         />
      </Route>
      <Redirect from='*' to='/' />
    </Router>
  )
}

const path = require('path')
const fs = require('fs')

import React from 'react'
import {Provider} from 'react-redux'
import {renderToString} from 'react-dom/server'
import {match, RouterContext} from 'react-router'

import createRoutes from '../src/app/routes'
import createAppStore from '../src/app/store'

const routes = createRoutes({})

module.exports = function universalLoader (req, res) {
  // res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))
  const filePath = path.resolve(__dirname, '..', 'dist', 'index.html')

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('read err', err)
      return res.status(404).end()
    }
    match({ routes, location: req.url }, (err, redirect, renderProps) => {
      if (err) {
        console.error('match err', err)
        return res.status(404).end()
      } else if (redirect) {
        res.redirect(302, redirect.pathname + redirect.search)
      } else if (renderProps) {
        let appStore = createAppStore()
        const ReactApp = renderToString(
          <Provider store={appStore}>
            <RouterContext {...{renderProps}} dispatch={appStore.dispatch} />
          </Provider>
        )
        const RenderedApp = htmlData.replace('{{SSR}}', ReactApp)
        res.send(RenderedApp)
      } else {
        return res.status(404).end()
      }
    })
  })
}

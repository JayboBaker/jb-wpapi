import React from 'react'
import { connect } from 'react-redux'

// import MainNav from './nav/MainNav'
import HeaderNav from './nav/HeaderNav'

function App (props) {
  const { nav } = props
  return (
    <div id='outer-wrapper'>
      <div className='group' id='outer-container'>
        <HeaderNav {...{nav}} />
        {/* <MainNav {...{nav}} /> */}
        <main id='page-wrap'>
          {props.children}
        </main>
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  const { nav } = state
  return {
    nav
  }
}

export default connect(mapStateToProps)(App)

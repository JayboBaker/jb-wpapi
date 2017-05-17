import React from 'react'
import { push as Menu } from 'react-burger-menu'
import { Link } from 'react-router'

class MainNav extends React.Component {
  showSettings (event) {
    event.preventDefault()
  }

  render () {
    const mainNav = this.props.nav.main.items
    return (
      <Menu right noOverlay className='mobile-nav bg-white col'>
        <div className='mobile-nav-inner'>
          {mainNav && mainNav.map((nav) => {
            return <div key={nav.id}><Link to={`/${nav['object_slug']}`} style={{marginRight: '10px'}}>{nav.title}</Link></div>
          })}
        </div>
      </Menu>
    )
  }
}

export default MainNav

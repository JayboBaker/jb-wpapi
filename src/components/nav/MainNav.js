import React from 'react'
import { push as Menu } from 'react-burger-menu'
import { Link } from 'react-router'

class MainNav extends React.Component {
  showSettings (event) {
    event.preventDefault()
  }

  renderChild (children) {
    return children((child) => <div key={child.id}><Link to={`/${child['url']}`} style={{marginRight: '10px'}}>{child.title}</Link></div>)
  }

  render () {
    const mainNav = this.props.nav.main
    return (
      <Menu right noOverlay className='mobile-nav bg-white col'>
        <div className='mobile-nav-inner'>
          {mainNav && mainNav.map((nav) => nav.children && this.renderChildren(nav.children))}
        </div>
      </Menu>
    )
  }
}

export default MainNav

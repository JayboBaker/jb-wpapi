import React from 'react'
import { Link } from 'react-router'

function HeaderNav (props) {
  const headerNav = props.nav.header.items
  return (
    <div>
      {headerNav && headerNav.map((nav) => {
        return <Link key={nav.id} to={`/${nav['object_slug']}`} style={{marginRight: '10px'}}>{nav.title}</Link>
      })}
    </div>
  )
}

export default HeaderNav

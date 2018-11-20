import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = (props) =>
  <li className={props.className}>
    <Link className="nav-link" to={props.path}>
      {props.name}
      {(props.path === props.pageURI) ? (<span className="sr-only">(current)</span>) : ''}
    </Link>
  </li>


export default NavItem

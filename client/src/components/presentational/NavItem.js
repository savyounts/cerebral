import React from 'react'
import { Link } from 'react-router-dom'

// const Link = styled.a`
//   padding: 0.5em;
//   margin: 0.5em;
//   color: "#56E39F";
//   background: none;
//   border: #3b2c35;
//   align: right;
// `;


const NavItem = (props) => {
  return(
  <li className={props.className}>
    <Link className="nav-link" to={props.path}>
      {props.name}
      {(props.path === props.pageURI) ? (<span className="sr-only">(current)</span>) : ''}
    </Link>
  </li>
)}

export default NavItem

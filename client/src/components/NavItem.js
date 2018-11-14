import React from 'react'
import styled from 'styled-components'

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
    <a className="nav-link" href={props.path} >
      {props.name}
      {(props.path === props.pageURI) ? (<span className="sr-only">(current)</span>) : ''}
    </a>
  </li>
)}

export default NavItem

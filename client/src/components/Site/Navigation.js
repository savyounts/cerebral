import React from 'react'
import NavItem from './NavItem'
import { Link } from 'react-router-dom'

const Navigation = () =>
  <nav className="navbar navbar-expand-lg navbar-custom">
    <Link className="navbar-custom-brand" to="/">Cerebral</Link>

    <section className="navbar-ul">

      <div className="verticalLine">
        <NavItem name="create" path="/decks/new" className="navbar-ul"/>
      </div>
    </section>

      {/*<ul className="navbar-ul">
        <NavItem name="Login" path="/login" className={liClassName} pageURI={this.pageURI}/>
        <NavItem name="Signup" path="/signup" className='signup-button' pageURI={this.pageURI}/>
      </ul>*/}
  </nav>

export default Navigation

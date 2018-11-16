import React, {PureComponent} from 'react'
import NavItem from './NavItem'
import styled from 'styled-components'

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "#7BC68F"};
  background: none;
  border: #7BC68F;
`;


class Navigation extends PureComponent {

  state = {
    searchTerm: ''
  }

  handleChange = e =>{
    this.setState({
      searchTerm: e.target.value
    })
  }

  render(){
    const pageURI = window.location.pathname+window.location.search
    const liClassName = (this.props.path === pageURI) ? "nav-item acitve" : "nav-item"

    return(

      <nav className="navbar navbar-expand-lg navbar-custom">
        <a className="navbar-custom-brand" href="/">Cerebral</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse full-nav" id="navbarSupportedContent">
          <section className="navbar-ul">
            <form className="form-inline my-2 my-lg-0">
              <Input type="search" placeholder="Search" onChange={this.handleChange}/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>

            <div className="verticalLine">
              <NavItem name="create" path="/decks/new" className="navbar-ul" pageURI={this.pageURI}/>
            </div>
          </section>

          <ul className="navbar-ul">
            <NavItem name="Login" path="/login" className={liClassName} pageURI={this.pageURI}/>
            <NavItem name="Signup" path="/signup" className='signup-button' pageURI={this.pageURI}/>
          </ul>

        </div>
      </nav>


    )
  }

}
export default Navigation

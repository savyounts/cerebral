import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <h1>My Blog</h1>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;

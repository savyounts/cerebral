import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu2 from './components/menu2.js'
import Menu from './components/menu.js'
import Nav from './components/nav.js'
import './components/bootstrap.min.css'

class App extends Component {



  
  render() {
    return (
  
      <div className="App">
      
         <Nav />
      <div id="one"><Menu name="Dosa"/></div><br />
      <div id="two"><Menu2 name="Chinese"/></div><br />
      <div id="three"><Menu name="Continental"/></div>
      </div>
    );
  }
}

export default App;

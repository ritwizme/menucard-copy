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
       <a href="#three">yoyo</a>
         <Nav />
      <Menu name="Dosa" desc="A favourite in every South India home, our dosas come in variety of flavours that will fulfill all of your cravings"/><br />
      <Menu2 name="Chinese"/><br />
      <div id="three"><Menu name="Continental"/></div>
      </div>
    );
  }
}

export default App;

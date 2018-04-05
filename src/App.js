import React, { Component } from 'react';
import Routes from './routes';
import logo from './logo.svg';
import './App.css';
import Menu2 from './components/menu2.js';
import Menu from './components/menu.js';
import Nav from './components/nav.js';
import './components/bootstrap.min.css';
import Side from './components/sidelogo.js';


class App extends Component {



  
  render() {
    return (
  
      <div className="App">
            <Routes />
         <Nav />
     
      </div>
    );
  }
}

export default App;

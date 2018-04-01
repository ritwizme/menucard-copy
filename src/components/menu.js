import React, { Component } from 'react';
import './bootstrap.min.css'
import './css/menu.css';
import Container from './container.js'

class Menu extends Component {
  render() {
    return (
      <div className="App">
        <div class="menu col-md-offset-2 shadow"> 
{this.props.name}<br /><br />
  
  
      <Container dish="Dish1"/>
      <Container dish="Dish2"/>
      <Container dish="Dish3"/>


</div>

    </div>

    );
  }
}

export default Menu;

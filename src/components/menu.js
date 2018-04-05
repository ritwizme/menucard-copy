import React, { Component } from 'react';
//import './bootstrap.min.css'
import './css/menu.css';
import Container from './container.js'

class Menu extends Component {
  render() {
    return (
      <div className="App">
        <div class="menu col-md-offset-4 col-sm-5 col-md-5 col-lg-5 col-xs-10"> 
          <h3>{this.props.name}</h3><small><div clsass="col-md-offset-5 mktime">{this.props.mktime}</div></small><br /><br />
          <Container dish="Dish1" price="price1"/>
          <Container dish="Dish2" price="price2"/>
          <Container dish="Dish3" price="price3"/>
        </div>
      </div>
    );
  }
}

export default Menu;

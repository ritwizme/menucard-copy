import React, { Component } from 'react';
//import './bootstrap.min.css'
import './css/menu.css';
import Container from './container.js'

class Menu2 extends Component {
  render() {
    return (
      <div className="App">
        <div class="menu col-md-offset-4 col-md-6 col-sm-6 col-lg-6 col-xs-8"> 
          <h3>{this.props.name}</h3><small><div clsass="col-md-offset-5 mktime">{this.props.mktime}</div></small>
          <Container dish="dish4" price="price4" onClick={this.handleClick}/>
          <Container dish="dish5" price="price5"/>
          <Container dish="dish6" price="price6"/>
        </div>
      </div>
    );
  }
  
  handleClick(){
    console.log('this');
  }
}

export default Menu2;

import React, { Component } from 'react';
import Menu from '../components/menu.js';
import Menu2 from '../components/menu2.js';
//import './bootstrap.min.css';
import {Animated} from "react-animated-css";

import Side from '../components/sidelogo.js';

class Chinese extends Component {
  render() {
    return (
      <div id="two">
      <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
      <Menu2 name="Chinese" mktime="10Min"/>
      <Side />
      </Animated>
      </div>
     
    );
  }
}

export default Chinese;

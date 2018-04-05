import React, { Component } from 'react';
import Menu2 from '../components/menu2.js';
//import './bootstrap.min.css';
import {Animated} from "react-animated-css";
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';import './bootstrap.min.css'

import Side from '../components/sidelogo.js';

class Allday extends Component {
  componentWillMount(){
    //this.props.history.push('/dosa?id')
  }
  render() {
    return (
      
<div id="one">
<Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
<Menu2 name="Allday" mktime="10Min"/>
<Side />
</Animated>
</div>

    );
  }
}

export default Allday;

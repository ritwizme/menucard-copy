import React, { Component } from 'react';
import Menu from '../components/menu.js';
import Side from '../components/sidelogo.js';
//import './bootstrap.min.css';
import {Animated} from "react-animated-css";
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';import './bootstrap.min.css'


class Dosa extends Component {
  componentWillMount(){
    //this.props.history.push('/dosa?id')
  }
  render() {
    return (
      
<div id="one">
<Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
<Side />
<Menu name="Dosa" mktime="10Min"/>
</Animated>
</div>

    );
  }
}

export default Dosa;

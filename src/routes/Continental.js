import React, { Component } from 'react';
import Menu from '../components/menu.js';
//import './bootstrap.min.css';
import {Animated} from "react-animated-css";

import Side from '../components/sidelogo.js';


class Continental extends Component {
  render() {
    return (
<div id="three">
<Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
<Menu name="Continental" mktime="max making time 10 Min"/>
<Side />
</Animated>
</div>
    );
  }
}

export default Continental;

import React, { Component } from 'react';
import Menu from '../components/menu.js';
import Logo from '../components/Logo.js';
//import './bootstrap.min.css';
import {Animated} from "react-animated-css";


class Home extends Component {
  componentWillMount(){
    //this.props.history.push('/dosa?id')
  }
  render() {
    return (
<div>
<Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
 <Logo />

</Animated>
</div>
    );
  }
}

export default Home;

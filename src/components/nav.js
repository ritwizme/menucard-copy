import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
//import './bootstrap.min.css'

import './css/menu.css';

class Nav extends Component {
  render() {
    return (
<header>

<div class="open"> <span class="cls"></span> <span>
  <ul class="sub-menu ">
    <li> <a  href="/">Home</a> </li>
    <li> <a href="/dosa">All Day Menu</a> </li>
    <li> <a href="/continental">Lunch Menu</a> </li>
    <li> <a href="/chinese">Snack Menu</a> </li>
    <li> <a href="/allday">Snack Menu</a> </li>
  </ul>
  </span> <span class="cls"></span> </div>

      </header>
    );
  }
}

export default Nav;

import React, { Component } from 'react';
import './bootstrap.min.css'
import './css/menu.css';

class Nav extends Component {
  render() {
    return (
<nav class="navbar">
  <div class="container">
    <div class="navbar-header">
      <a class="navbar-brand" href="#"><b>ID</b></a>
    </div>
   
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#"> My Orders</a></li>
      <li><a href="#"> Feedback</a></li>
    </ul>
  </div>
</nav>
    );
  }
}

export default Nav;

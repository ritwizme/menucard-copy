import React, { Component } from 'react';
//import './bootstrap.min.css'
import './css/menu.css';

class Container extends Component {
  render() {
    return (
      <div> 
        <hr />
          <h4 className="dish"><b>{this.props.dish}............................{this.props.price}</b></h4>
          <h5>
            <small className="desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </small>
          </h5>
          <button className="btn btn-dfault col-md-offset-9" onClick={this.add.bind(this)}>+</button>
          <button className="btn btn-dfault col-md-offset-1" onClick={this.subtract.bind(this)}>-</button>
        <hr /><br />
        {this.state.arr.map((item, index) => (
          <p key={index}>{ item }</p>
        ))}
      </div>
    );
  }

  constructor(props){
    super(props);
    this.state = {
      arr: []
    }
  }

  add(){
    const temp = this.state.arr;
    temp.push(this.props.dish);
    this.setState({ arr: temp });
  }

  subtract() {
    const temp = this.state.arr;
    temp.pop();
    this.setState({ arr: temp });
    console.log(this.state.arr)
  }
}

export default Container;

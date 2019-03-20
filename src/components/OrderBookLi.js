import React, { Component } from 'react';
import '../App.css';
class OrderBookLi extends Component {
  render() {
    return (
      <div className="OrderBookLi">
      <div className="OrderBookLiBar"></div>
        <li>
        <div>-</div>
        <div>25.00000</div>
        <div> 0.05300</div>
        </li>
      </div>
    );
  }
}

export default OrderBookLi;

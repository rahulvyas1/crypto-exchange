import React, { Component } from 'react';
import '../App.css';
class OrderBookLi extends Component {
  render() {
    return (
      <div className="OrderBookLi">
        <li>
          <div>-</div>
        <div>25.00000000</div>
        <div> 0.00005300</div>
        </li>
      </div>
    );
  }
}

export default OrderBookLi;

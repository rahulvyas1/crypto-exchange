import React, { Component } from 'react';
import '../App.css';
import OrderBookLi from './OrderBookLi';
class OrderBook extends Component {
  render() {
    return (
   
      <div className="OrderBook">


      <div> Order Book</div>
      <div className="ListHeader">
      
        <div>My Size</div>
        <div>Size</div>
        <di>Price(BTC)</di>
        </div>
      <ul>
        <OrderBookLi></OrderBookLi>
      </ul>
      </div>
    );
  }
}

export default OrderBook;

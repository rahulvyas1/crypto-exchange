import React, { Component } from 'react';
import '../App.css';
import OrderBook from './OrderBook';
class Orders extends Component {
  render() {
    return (
      <div className="OrdersSection">
       <OrderBook></OrderBook>
       <OrderBook></OrderBook>
      </div>
    );
  }
}

export default Orders;

import React, { Component } from 'react';
import '../App.css';
import OrderBook from './OrderBook';
import TradeHistory from './TradeHistory';
class Orders extends Component {
  render() {
    return (
      <div className="OrdersSection">
       <OrderBook></OrderBook>
       <TradeHistory></TradeHistory>
      </div>
    );
  }
}

export default Orders;

import React, { Component } from 'react';
import '../App.css';
import OrderBook from './OrderBook';
import TradeHistory from './TradeHistory';
import OrderBookLi from './OrderBookLi';
class OrderBookSeparator extends Component {
  render() {
    return (
      <div className="OrderBookSeparator">
        <ul >
          <li>0.00%</li>
          <li>221.09493530</li>
          <li>0.00433530</li>
        </ul>
      </div>
    );
  }
}

export default OrderBookSeparator;

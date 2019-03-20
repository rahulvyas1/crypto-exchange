import React, { Component } from 'react';
import '../App.css';
import OrderBookLi from './OrderBookLi';
import { ReactComponent as Plus } from '../assets/plus.svg';
import { ReactComponent as Minus } from '../assets/minus.svg';
class OrderBook extends Component {
  render() {
    return (
   
      <div className="OrderBook">
      <div className="OrderBookHeader">
      <div className="BlockTitle Child"> Order Book</div>
      <div className="OrderBookHeaderButtons">
      <button className="SVGIcon"><Plus></Plus></button>
      <button className="SVGIcon"><Minus></Minus></button>
      </div>
      </div>
      <div className="ListHeader">
        <div>My Size</div>
        <div>Size</div>
        <di>Price(BTC)</di>
        </div>
      <ul>
        <OrderBookLi></OrderBookLi>
        <OrderBookLi></OrderBookLi>
        <OrderBookLi></OrderBookLi>
        <OrderBookLi></OrderBookLi>
        <OrderBookLi></OrderBookLi>
        <OrderBookLi></OrderBookLi>
        <OrderBookLi></OrderBookLi>
        <OrderBookLi></OrderBookLi>
        <OrderBookLi></OrderBookLi>
        <OrderBookLi></OrderBookLi>
        <OrderBookLi></OrderBookLi>
        <OrderBookLi></OrderBookLi>
        <OrderBookLi></OrderBookLi>
        <OrderBookLi></OrderBookLi>
        <OrderBookLi></OrderBookLi>
        <OrderBookLi></OrderBookLi>
        <OrderBookLi></OrderBookLi>
        <OrderBookLi></OrderBookLi>
        <OrderBookLi></OrderBookLi>
      </ul>
      </div>
    );
  }
}

export default OrderBook;

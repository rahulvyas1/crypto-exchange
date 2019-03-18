import React, { Component } from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import '../App.css';
class Charts extends Component {
  render() {
    return (
      <div className="Charts">
       <TradingViewWidget
    symbol="NASDAQ:AAPL"
    theme={Themes.DARK}
    locale="en"
    autosize
  />
      </div>
    );
  }
}

export default Charts;

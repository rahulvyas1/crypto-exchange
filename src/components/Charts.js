import React, { Component } from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import '../App.css';
class Charts extends Component {
  render() {
    
    return (
      <div className="Charts">
      <div className="ChartsHeader">
      <div className="BlockTitle">Charts</div>
      <div class="tab">
  <button className="tablinks">Candle</button>
  <button className="tablinks">Line</button>
  <button className="tablinks">Depth</button>
</div></div>
       <TradingViewWidget 
       className="TradingViewWidget"
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

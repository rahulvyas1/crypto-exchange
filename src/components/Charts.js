import React, { Component } from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import '../App.css';
class Charts extends Component {
  render() {
    
    return (
      <div className="Charts">
      <div className="OrderBookHeader">
      <div >Charts</div>
      <div class="CoinTabs">
  <button className="CoinTabsLink">Candle</button>
  <button className="CoinTabsLink">Line</button>
  <button className="CoinTabsLink">Depth</button>
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

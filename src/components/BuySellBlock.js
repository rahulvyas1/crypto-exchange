import React, { Component } from 'react';
import InputOrderBox from './InputOrderBox';
import MiniRadioButtonSelector from './MiniRadioButtonSelector';
import ButtonOrderSubmit from './ButtonOrderSubmit';
import '../App.css';
class BuySellBlock extends Component {
  render() {
    
    return (
      <div className="BuySellBlock">
      <div className="OrderBookHeader">
      <div className="BuySellHeadingText"> Buy PLKX </div>
      <div> 999.99999 PLKX </div>
      </div>
      <InputOrderBox></InputOrderBox>
      <div className="RadioButtonSelectorArea">
      <MiniRadioButtonSelector></MiniRadioButtonSelector>
      <MiniRadioButtonSelector></MiniRadioButtonSelector>
      <MiniRadioButtonSelector></MiniRadioButtonSelector>
      <MiniRadioButtonSelector></MiniRadioButtonSelector>
      </div>
      <div className="TotalAmountBar">
        You will get:
        <span>200 ETH</span></div>
      <ButtonOrderSubmit ></ButtonOrderSubmit>
      </div>
    );
  }
}

export default BuySellBlock;

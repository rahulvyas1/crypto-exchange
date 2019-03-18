import React, { Component } from 'react';
import InputOrderBox from './InputOrderBox';
import MiniRadioButtonSelector from './MiniRadioButtonSelector';
import ButtonOrderSubmit from './ButtonOrderSubmit';
import '../App.css';
class BuySellBlock extends Component {
  render() {
    
    return (
      <div className="BuySellBlock">
      <div className="BuySellHeadingText"> Buy PLKX </div>
      <div> 999.99999 PLKX </div>
      <InputOrderBox></InputOrderBox>
      <div className="RadioButtonSelectorArea">
      <MiniRadioButtonSelector></MiniRadioButtonSelector>
      <MiniRadioButtonSelector></MiniRadioButtonSelector>
      <MiniRadioButtonSelector></MiniRadioButtonSelector>
      <MiniRadioButtonSelector></MiniRadioButtonSelector>
      </div>
      <div>Total: 200 ETH</div>
      <ButtonOrderSubmit ></ButtonOrderSubmit>
      </div>
    );
  }
}

export default BuySellBlock;

import React, { Component } from 'react';
import InputOrderBox from './InputOrderBox';
import MiniRadioButtonSelector from './MiniRadioButtonSelector';
class BuySellBlock extends Component {
  render() {
    return (
      <div>
      <div> Buy PLKX </div>
      <div> 999.99999 PLKX </div>
      <InputOrderBox></InputOrderBox>
      <MiniRadioButtonSelector></MiniRadioButtonSelector>
      <MiniRadioButtonSelector></MiniRadioButtonSelector>
      <MiniRadioButtonSelector></MiniRadioButtonSelector>
      <MiniRadioButtonSelector></MiniRadioButtonSelector>
      </div>
    );
  }
}

export default BuySellBlock;

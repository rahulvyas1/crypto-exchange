import React, { Component } from 'react';
import '../App.css';
class InputOrderBox extends Component {
  render() {
    return (
      <div>
      <form>
      <div> PRICE </div>
        <input type="number" step="0.0001" className="InputOrderBoxField"></input>
      </form>
      </div>
    );
  }
}

export default InputOrderBox;

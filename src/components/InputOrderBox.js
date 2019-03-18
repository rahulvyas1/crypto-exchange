import React, { Component } from 'react';

class InputOrderBox extends Component {
  render() {
    return (
      <div>
      <div> PRICE </div>
      <form>
        <input type="number" step="0.0001"></input>
      </form>
      </div>
    );
  }
}

export default InputOrderBox;

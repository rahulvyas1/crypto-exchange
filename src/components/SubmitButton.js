import React, { Component } from 'react';
import '../App.css';
class SubmitButton extends Component {
  render() {
    return (
      <div> 
      <div className="SubmitButton">
      <form>
        <button>{this.props.text}</button>
      </form>
      </div>
      
      </div>
    );
  }
}

export default SubmitButton;

import React, { Component } from 'react';
import '../App.css';
import NavbarItem from './NavbarItem';
import { ReactComponent as Logo } from '../assets/logo.svg';
class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
      <div className="Left NavbarPart">
      <Logo className="Logo"></Logo>
        <NavbarItem>

        </NavbarItem>
        </div>
        <div className="NavbarPart Right">
          <NavbarItem></NavbarItem>
          <NavbarItem></NavbarItem>
          <NavbarItem></NavbarItem>
          <NavbarItem></NavbarItem>
        </div>
      </div>
    );
  }
}

export default Navbar;

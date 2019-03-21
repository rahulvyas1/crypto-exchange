import React, { Component } from 'react';
import BuySellSection from './components/BuySellSection';
import Navbar from './components/Navbar';
import Charts from './components/Charts';
import MyOrders from './components/MyOrders'
import Orders from './components/Orders';
class App extends Component {
  render() {
    return (
      <div className="body">
      <Navbar></Navbar>
      <div className="ContainerMain">
      <div className="Container ContainerTop">
      <Charts ></Charts>
      <Orders ></Orders>
      </div>
      {/* <div className="Container ContainerBottom">
      <MyOrders></MyOrders>
      <BuySellSection></BuySellSection>
      </div> */}
      </div>
      </div>
    );
  }
}

export default App;

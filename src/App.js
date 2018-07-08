import React, { Component } from 'react';
import './App.css';

import Banner from './components/Banner/Banner';
import Chat from './components/Chat/Chat';
import Pet from './components/Pet/Pet';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner/>
          <div className="App-content">
          <div className="App-pet"><Pet color= "amarillo"/></div>  
          <div className="App-chat"><Chat/></div>  
          <div className="App-pet"><Pet color= "rojo"/></div>  
        </div>      
      </div>  
    );
  }
}

export default App;

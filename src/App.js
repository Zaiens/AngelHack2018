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
          <Pet color= "amarillo"/>
          <Chat />
          <Pet color= "rojo"/>
        </div>      
      </div>  
    );
  }
}

export default App;

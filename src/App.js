import React, { Component } from 'react';
import CreateGifContainer from './containers/CreateGifContainer';
import Navbar from './components/Navbar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='avenir'>
        <Navbar />
        <CreateGifContainer />
      </div>
    );
  }
}

export default App;

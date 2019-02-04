import React, { Component } from 'react';

import TopMenu from './components/TopMenu';
import CreateGifContainer from './containers/CreateGifContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <TopMenu />
        <CreateGifContainer />
      </div>
    );
  }
}

export default App;

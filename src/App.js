import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CreateGifContainer from './containers/CreateGifContainer';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='avenir'>
          <Navbar />
          <Route exact path='/create' component={CreateGifContainer} />
        </div>
      </Router>
    );
  }
}

export default App;

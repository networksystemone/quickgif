import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavBar from './components/NavBar';
import LocalVideoContainer from './containers/LocalVideoContainer';
import './tachyons/css/tachyons.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container fluid className='full-height'>
        <NavBar />
        <LocalVideoContainer />
      </Container>
    );
  }
}

export default App;

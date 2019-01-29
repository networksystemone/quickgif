import React, { Component } from 'react';
import { Button, Container, Row } from 'reactstrap';
import FaYoutubePlay from 'react-icons/lib/fa/youtube-play';
import FaFileMovieO from 'react-icons/lib/fa/file-movie-o';

import NavBar from './components/NavBar';
import LocalVideoContainer from './containers/LocalVideoContainer';
import logo from './toast.svg';
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

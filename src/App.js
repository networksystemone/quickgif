import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'reactstrap'
import FaYoutubePlay from 'react-icons/lib/fa/youtube-play'
import FaFileMovieO from 'react-icons/lib/fa/file-movie-o'
import FaHeart from 'react-icons/lib/fa/heart'
import FaCode from 'react-icons/lib/fa/code'

import NavBar from './components/NavBar'
import LocalVideoContainer from './containers/LocalVideoContainer'
import logo from './toast.svg'
import './App.css'

/**

<Row className="justify-content-center fixed-bottom">
  <p>
    <FaCode size={24} /> with <FaHeart color="red" /> by{' '}
    <a href="http://www.kaleb.io">
      <b>kaleb.io</b>
    </a>
  </p>
</Row>

*/

class App extends Component {
  state = {
    renderVideoContainer: false
  }

  handleClick = e => {
    e.preventDefault()
    this.setState(prevState => ({
      renderVideoContainer: !prevState.renderVideoContainer
    }))
  }

  render() {
    if (this.state.renderVideoContainer === true) {
      return (
        <Container fluid className="full-height">
          <NavBar />
          <LocalVideoContainer />
        </Container>
      )
    } else {
      return (
        <Container fluid>
          <NavBar />
          <Row className="justify-content-center align-items-center">
            <img src={logo} class="img-fluid" width="400" height="400" alt="" />
          </Row>
          <Row className="justify-content-center align-items-center top-buffer">
            <Button color="success" onClick={this.handleClick}>
              <FaFileMovieO /> Convert Local .MP4 Video
            </Button>
          </Row>

          <Row className="justify-content-center align-items-center top-buffer">
            <Button color="danger">
              <FaYoutubePlay /> Convert Youtube Video (Coming Soon!)
            </Button>
          </Row>
        </Container>
      )
    }
  }
}

export default App

import React, { Component } from 'react';
import gifshot from 'gifshot';
import { Button, Container, Col, Row } from 'reactstrap';

import FileDrop from '../components/FileDrop';
import VideoPreview from '../components/VideoPreview';
import Loader from '../components/Loader';
import './LocalVideoContainer.css';

class LocalVideoContainer extends Component {
  state = {
    file: null,
    gif: null,
    startTime: 0,
    duration: 0,
    gifComplete: false,
    showLoader: false
  };

  handleFile = file => {
    this.setState({
      file
    });
  };

  setDuration = duration => {
    this.setState({ duration });
  };

  setStartTime = startTime => {
    this.setState({ startTime });
  };

  createGif = options => {
    this.setState({ showLoader: true });

    gifshot.createGIF(
      {
        video: this.state.file,
        gifWidth: 480,
        gifHeight: 270,
        numFrames: this.state.duration / 0.1,
        frameDuration: 1,
        offset: this.state.startTime
      },
      gif => {
        this.setState({
          gif,
          showLoader: false
        });
      }
    );
  };

  buildGif = options => {
    this.createGif(options);
  };

  displayGif = () => {
    return (
      <div>
        <img class='img-fluid' src={this.state.gif.image} alt='gifImg' />
      </div>
    );
  };

  render() {
    if (this.state.showLoader === true) {
      return (
        <Container className='vertical-center'>
          <Row>
            <Loader />
          </Row>
        </Container>
      );
    } else if (this.state.file === null) {
      return <FileDrop file={this.handleFile} />;
    } else if (this.state.file !== null && this.state.gif === null) {
      return (
        <Container>
          <Row>
            <Col>
              <VideoPreview
                source={this.state.file}
                startTime={this.setStartTime}
                duration={this.setDuration}
              />
            </Col>
          </Row>
          <Row className='justify-content-end'>
            <Button onClick={this.createGif} color='success' size='md'>
              Create Gif
            </Button>
          </Row>
        </Container>
      );
    } else {
      return (
        <Container className='vertical-center'>
          <Row>
            <Col align='center'>{this.displayGif()}</Col>
          </Row>
        </Container>
      );
    }
  }
}

export default LocalVideoContainer;

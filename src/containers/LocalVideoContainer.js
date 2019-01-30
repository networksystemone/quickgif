import React, { Component } from 'react';
import gifshot from 'gifshot';
import { Button, Container, Col, Row } from 'reactstrap';
import { observer, inject } from 'mobx-react';

import FileDrop from '../components/FileDrop';
import VideoPreview from '../components/VideoPreview';
import Loader from '../components/Loader';
import './LocalVideoContainer.css';

@inject('GifStore')
@observer
class LocalVideoContainer extends Component {
  state = {
    gif: null,
    startTime: 0,
    gifComplete: false,
    showLoader: false
  };

  handleFile = file => {
    this.props.GifStore.setFile(file);
  };

  setDuration = duration => {
    this.props.GifStore.setDuration(duration);
  };

  setStartTime = startTime => {
    this.setState({ startTime });
  };

  createGif = options => {
    this.setState({ showLoader: true });

    gifshot.createGIF(
      {
        video: this.props.GifStore.file,
        gifWidth: 480,
        gifHeight: 270,
        numFrames: this.props.GifStore.duration / 0.1,
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
    } else if (this.props.GifStore.file === null) {
      return (
        <div>
          <FileDrop file={this.handleFile} />
          <p>{this.props.GifStore.file}</p>
        </div>
      );
    } else if (this.props.GifStore.file !== null && this.state.gif === null) {
      return (
        <Container>
          <Row>
            <Col>
              <VideoPreview
                source={this.props.GifStore.file}
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

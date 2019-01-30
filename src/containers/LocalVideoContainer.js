import React, { Component } from 'react';
import gifshot from 'gifshot';
import { Button, Container, Col, Row } from 'reactstrap';
import { observer, inject } from 'mobx-react';
import { create } from '../GifMaker';
import FileDrop from '../components/FileDrop';
import VideoPreview from '../components/VideoPreview';
import './LocalVideoContainer.css';

@inject('GifStore')
@observer
class LocalVideoContainer extends Component {
  state = {
    gif: null
  };

  handleFile = file => {
    this.props.GifStore.setFile(file);
  };

  setDuration = duration => {
    this.props.GifStore.setDuration(duration);
  };

  setStartTime = startTime => {
    this.props.GifStore.setStartTime(startTime);
  };

  createGif = () => {
    create();
  };

  displayGif = () => {
    return (
      <div>
        <img
          class='img-fluid'
          src={this.props.GifStore.gif.image}
          alt='gifImg'
        />
      </div>
    );
  };

  render() {
    if (this.props.GifStore.file === null) {
      return (
        <div>
          <FileDrop file={this.handleFile} />
          <p>{this.props.GifStore.file}</p>
        </div>
      );
    } else if (
      this.props.GifStore.file !== null &&
      this.props.GifStore.gif === null
    ) {
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

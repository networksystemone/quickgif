import React, { Component } from 'react';
import { Segment, Header, Label, Button } from 'semantic-ui-react';
import styled from 'styled-components';
import { string } from 'prop-types';
import ReactPlayer from 'react-player';
import Slider, { createSliderWithTooltip } from 'rc-slider';

import { createPreview } from '../GifMaker';

import 'rc-slider/assets/index.css';

const SliderWithTooltip = createSliderWithTooltip(Slider);

class VideoPreview extends Component {
  static propTypes = {
    source: string
  };

  state = {
    videoLength: 0
  };

  ref = player => {
    this.player = player;
  };

  setVideoLength = videoLength => {
    this.setState({ videoLength });
  };

  secondsFormatter = value => {
    return `${value} seconds`;
  };

  handleStartChange = value => {
    this.player.seekTo(value);
    this.props.startTime(value);
  };

  handleDurationChange = value => {
    this.props.duration(value);
  };

  createGif = () => {
    createPreview();
  };

  render() {
    return (
      <Container>
        <Sliders>
          <Header>2) Trim your video and select width</Header>
          <SliderContainer>
            <Label style={{ margin: '10px' }}>Start Time</Label>
            <SliderWithTooltip
              tipFormatter={this.secondsFormatter}
              min={0}
              max={this.state.videoLength}
              onChange={this.handleStartChange}
              style={{ margin: '10px' }}
            />
          </SliderContainer>
          <SliderContainer>
            <Label style={{ margin: '10px' }}>Duration</Label>
            <SliderWithTooltip
              tipFormatter={this.secondsFormatter}
              min={1}
              max={15}
              onChange={this.handleDurationChange}
              style={{ margin: '10px' }}
            />
          </SliderContainer>

          <Label style={{ margin: '10px' }}>Width</Label>
          <Button.Group>
            <Button>100px</Button>
            <Button>260px</Button>
            <Button>360px</Button>
            <Button>480px</Button>
          </Button.Group>
        </Sliders>
        <div style={{ maxWidth: '50%', maxHeight: '50%' }}>
          <Segment>
            <ReactPlayer
              ref={this.ref}
              url={this.props.source}
              onDuration={this.setVideoLength}
              playing
              muted
              width='100%'
              height='100%'
            />
          </Segment>
          <Button onClick={this.createGif}>Add a caption</Button>
        </div>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
`;

const Sliders = styled(Segment)`
  min-width: 400px;
`;

const SliderContainer = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default VideoPreview;

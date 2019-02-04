import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import styled from 'styled-components';
import { string } from 'prop-types';
import ReactPlayer from 'react-player';
import Slider, { createSliderWithTooltip } from 'rc-slider';

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

  render() {
    return (
      <Container>
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

          <SliderWithTooltip
            tipFormatter={this.secondsFormatter}
            min={0}
            max={this.state.videoLength}
            onChange={this.handleStartChange}
          />

          <SliderWithTooltip
            tipFormatter={this.secondsFormatter}
            min={1}
            max={15}
            onChange={this.handleDurationChange}
          />
        </Segment>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default VideoPreview;

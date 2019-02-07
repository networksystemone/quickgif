import React, { Component } from 'react';
import { Segment, Button } from 'semantic-ui-react';
import styled from 'styled-components';
import { string } from 'prop-types';
import ReactPlayer from 'react-player';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import { observer, inject } from 'mobx-react';
import 'rc-slider/assets/index.css';

const SliderWithTooltip = createSliderWithTooltip(Slider);

@inject('GifStore')
@observer
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
    const { GifStore } = this.props;
    return (
      <Container>
        <Wrapper className='gray'>
          <h2 className='f4 f3-l fw2  ma1'>Looks great!</h2>
          <h2 className='f5 f4-l fw2  ma1'>
            Let's trim the video to the spot and duration you want
          </h2>
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
          <Segment>
            <SliderContainer>
              <label style={{ margin: '10px' }}>Start Time</label>
              <SliderWithTooltip
                tipFormatter={this.secondsFormatter}
                min={0}
                max={this.state.videoLength}
                onChange={this.handleStartChange}
                style={{ margin: '10px' }}
              />
            </SliderContainer>
            <SliderContainer>
              <label style={{ margin: '10px' }}>Duration</label>
              <SliderWithTooltip
                tipFormatter={this.secondsFormatter}
                min={1}
                max={15}
                onChange={this.handleDurationChange}
                style={{ margin: '10px' }}
              />
            </SliderContainer>
          </Segment>
          <Button color={'teal'} onClick={() => GifStore.setVideoTrimmed()}>
            Add a caption
          </Button>
        </Wrapper>
      </Container>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 600px;
  margin: 1rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const SliderContainer = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default VideoPreview;

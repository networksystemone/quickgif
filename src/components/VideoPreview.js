import React, { Component } from 'react'
import { string } from 'prop-types'
import ReactPlayer from 'react-player'
import Slider, { createSliderWithTooltip } from 'rc-slider'
import { Container, Row, Col } from 'reactstrap'

import 'rc-slider/assets/index.css'

const SliderWithTooltip = createSliderWithTooltip(Slider)
const style = { width: 600, margin: 50 }

class VideoPreview extends Component {
  static propTypes = {
    source: string
  }

  state = {
    videoLength: 0
  }

  ref = player => {
    this.player = player
  }

  setVideoLength = videoLength => {
    this.setState({ videoLength })
  }

  secondsFormatter = value => {
    return `${value} seconds`
  }

  handleStartChange = value => {
    this.player.seekTo(value)

    //Callback to  Video Container
    this.props.startTime(value)
  }

  handleDurationChange = value => {
    this.props.duration(value)
  }

  render() {
    return (
      <Container>
        <Row>
          <Col align="center">
            <ReactPlayer
              ref={this.ref}
              url={this.props.source}
              onDuration={this.setVideoLength}
              playing
              muted
              width="100%"
              height="100%"
            />
          </Col>
        </Row>
        <hr />

        {/* Start Time Slider*/}
        <Row>
          <Col xs="2">
            <p>Start Time</p>
          </Col>
          <Col xs="10">
            <SliderWithTooltip
              tipFormatter={this.secondsFormatter}
              min={0}
              max={this.state.videoLength}
              onChange={this.handleStartChange}
            />
          </Col>
        </Row>

        {/* Gif Duration Slider 0-15s */}
        <Row>
          <Col xs="2">
            <p>Gif Length</p>
          </Col>
          <Col xs="10">
            <SliderWithTooltip
              tipFormatter={this.secondsFormatter}
              min={1}
              max={15}
              onChange={this.handleDurationChange}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default VideoPreview

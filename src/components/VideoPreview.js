import React, { Component } from 'react'
import { string } from 'prop-types'
import ReactPlayer from 'react-player'
import Slider, { createSliderWithTooltip } from 'rc-slider'

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
      <div style={style}>
        <ReactPlayer
          ref={this.ref}
          url={this.props.source}
          onDuration={this.setVideoLength}
          playing
          muted
        />
        {/* Start Time Slider*/}
        <SliderWithTooltip
          tipFormatter={this.secondsFormatter}
          min={0}
          max={this.state.videoLength}
          onChange={this.handleStartChange}
        />

        {/* Gif Duration Slider 0-15s */}
        <SliderWithTooltip
          tipFormatter={this.secondsFormatter}
          min={0}
          max={15}
          onChange={this.handleDurationChange}
        />
      </div>
    )
  }
}

export default VideoPreview

import React, { Component } from "react";
import { string } from "prop-types";
import ReactPlayer from "react-player";

class VideoPlayer extends Component {
  state = {
    videoLength: null
  };

  static propTypes = {
    source: string
  };

  //callback to parent component
  getVideoLength = videoLength => {
    this.props.getVideoLength(videoLength);
  };

  render() {
    return (
      <div>
        <ReactPlayer
          url={this.props.source}
          onDuration={this.getVideoLength}
          playing
          muted
        />
      </div>
    );
  }
}

export default VideoPlayer;

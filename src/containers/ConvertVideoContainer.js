import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import Dropzone from "react-dropzone";
import gifshot from "gifshot";

import VideoSlider from "../components/VideoSlider";
import VideoPlayer from "../components/VideoPlayer";

class ConvertVideoContainer extends Component {
  state = {
    file: null,
    gif: null,
    videoLength: null
  };

  onDrop = file => {
    console.log(file);
    this.setState({
      file: file[0].preview
    });
  };

  createGif = () => {
    gifshot.createGIF(
      {
        video: this.state.file
      },
      gif => {
        this.setState({
          gif
        });
        console.log(gif);
      }
    );
  };

  displayGif = () => {
    console.log(this.state.gif);

    return (
      <div>
        <img src={this.state.gif.image} alt="gifImg" />
      </div>
    );
  };

  setVideoLength = videoLength => {
    this.setState({ videoLength });
  };

  render() {
    if (this.state.file === null) {
      return (
        <div>
          <p>ConvertVideoContainer</p>
          <Dropzone onDrop={this.onDrop}>
            <p>
              Try dropping some files here, or click to select files to upload.
            </p>
          </Dropzone>
        </div>
      );
    } else if (this.state.file !== null && this.state.gif === null) {
      return (
        <div>
          <VideoPlayer
            source={this.state.file}
            getVideoLength={this.setVideoLength}
          />
          <VideoSlider min={0} max={this.state.videoLength} />
          <Button onClick={this.createGif}>Create Gif!</Button>
        </div>
      );
    } else {
      return <div>{this.displayGif()}</div>;
    }
  }
}

export default ConvertVideoContainer;

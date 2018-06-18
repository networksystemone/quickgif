import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import Dropzone from "react-dropzone";
import gifshot from "gifshot";

import VideoPlayer from "../components/VideoPreview";

class ConvertVideoContainer extends Component {
  state = {
    file: null,
    gif: null
  };

  onDrop = file => {
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
          <VideoPlayer source={this.state.file} />
          <Button onClick={this.createGif}>Create Gif!</Button>
        </div>
      );
    } else {
      return <div>{this.displayGif()}</div>;
    }
  }
}

export default ConvertVideoContainer;

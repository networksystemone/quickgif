import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import FileDrop from '../components/FileDrop';
import VideoPreview from '../components/VideoPreview';
import Caption from '../components/Caption';

@inject('GifStore')
@observer
class CreateGifContainer extends Component {
  handleFile = file => {
    this.props.GifStore.setFile(file);
  };

  setDuration = duration => {
    this.props.GifStore.setDuration(duration);
  };

  setStartTime = startTime => {
    this.props.GifStore.setStartTime(startTime);
  };

  displayGif = () => {
    return (
      <div>
        <img src={this.props.GifStore.gif.image} alt='gifImg' />
      </div>
    );
  };

  render() {
    const { fileUploaded, videoTrimmed } = this.props.GifStore;
    if (!fileUploaded) {
      return <FileDrop file={this.handleFile} />;
    } else if (fileUploaded && !videoTrimmed) {
      return (
        <VideoPreview
          source={this.props.GifStore.file}
          startTime={this.setStartTime}
          duration={this.setDuration}
        />
      );
    } else {
      return <Caption />;
    }
  }
}

export default CreateGifContainer;
